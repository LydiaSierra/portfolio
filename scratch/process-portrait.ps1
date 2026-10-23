Add-Type -AssemblyName System.Drawing

$srcPath = 'C:\Users\Lydia\.gemini\antigravity\brain\9731ce72-5415-427d-ad4a-febbba797224\portrait.jpg'
$lightPath = 'c:\Users\Lydia\Documents\GitHub\portfolio\assets\images\hero-portrait-light.png'
$darkPath = 'c:\Users\Lydia\Documents\GitHub\portfolio\assets\images\hero-portrait-dark.png'

$srcBmp = [System.Drawing.Bitmap]::FromFile($srcPath)
Write-Output ("Source image size: " + $srcBmp.Width + "x" + $srcBmp.Height)

# 1. Save original as hero-portrait-light.png
$srcBmp.Save($lightPath, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Output "Saved hero-portrait-light.png"

# 2. Calibrated Dark Mode Transformation
# Target:
# - Moderately reduced brightness (~0.88)
# - Subdued saturation (~0.82) to match dark theme deep tones (#181614, #24201D)
# - Balanced contrast to preserve subject features and clothing without crushing shadows
# - Slight warm tint adjustment to keep skin tone healthy and natural against dark surface

$w = $srcBmp.Width
$h = $srcBmp.Height
$darkBmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($darkBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

$s = 0.82
$rw = [Single](0.2126 * (1.0 - $s))
$gw = [Single](0.7152 * (1.0 - $s))
$bw = [Single](0.0722 * (1.0 - $s))

$cMatrix = [Single[][]](
    @( [Single]($rw + $s * 0.92), [Single]($rw),                 [Single]($rw),                 [Single]0.0, [Single]0.0 ),
    @( [Single]($gw),             [Single]($gw + $s * 0.88),     [Single]($gw),                 [Single]0.0, [Single]0.0 ),
    @( [Single]($bw),             [Single]($bw),                 [Single]($bw + $s * 0.90),     [Single]0.0, [Single]0.0 ),
    @( [Single]0.0,               [Single]0.0,                   [Single]0.0,                   [Single]1.0, [Single]0.0 ),
    @( [Single]-0.05,             [Single]-0.06,                 [Single]-0.05,                 [Single]0.0, [Single]1.0 )
)

$colorMatrix = New-Object System.Drawing.Imaging.ColorMatrix(,$cMatrix)
$imgAttr = New-Object System.Drawing.Imaging.ImageAttributes
$imgAttr.SetColorMatrix($colorMatrix, [System.Drawing.Imaging.ColorMatrixFlag]::Default, [System.Drawing.Imaging.ColorAdjustType]::Bitmap)

$rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
$g.DrawImage($srcBmp, $rect, 0, 0, $w, $h, [System.Drawing.GraphicsUnit]::Pixel, $imgAttr)

$g.Dispose()
$srcBmp.Dispose()

$darkBmp.Save($darkPath, [System.Drawing.Imaging.ImageFormat]::Png)
$darkBmp.Dispose()
Write-Output "Saved hero-portrait-dark.png successfully"
