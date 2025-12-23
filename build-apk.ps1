#!/usr/bin/env pwsh

# NexusAI APK Build Script
# Run this script to build the Android APK

Write-Host "🚀 NexusAI APK Build Script" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan

# Check prerequisites
Write-Host "`n📋 Checking prerequisites..." -ForegroundColor Yellow

# Check Java
try {
    $javaVersion = java -version 2>&1 | Select-Object -First 1
    Write-Host "✅ Java installed: $javaVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Java not found. Install from: https://www.oracle.com/java/technologies/downloads/" -ForegroundColor Red
    exit 1
}

# Check Node.js
try {
    $nodeVersion = node -v
    Write-Host "✅ Node.js installed: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js not found. Install from: https://nodejs.org/" -ForegroundColor Red
    exit 1
}

# Check Cordova
try {
    $cordovaVersion = cordova -v
    Write-Host "✅ Cordova installed: $cordovaVersion" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Cordova not found globally. Installing..." -ForegroundColor Yellow
    npm install -g cordova
}

# Check Android SDK
if ($env:ANDROID_HOME) {
    Write-Host "✅ Android SDK found at: $env:ANDROID_HOME" -ForegroundColor Green
} else {
    Write-Host "❌ Android SDK not configured" -ForegroundColor Red
    Write-Host "`n   Set ANDROID_HOME environment variable:" -ForegroundColor Yellow
    Write-Host '   $env:ANDROID_HOME = "C:\Users\PC\AppData\Local\Android\Sdk"' -ForegroundColor Gray
    Write-Host '   [Environment]::SetEnvironmentVariable("ANDROID_HOME", $env:ANDROID_HOME, "User")' -ForegroundColor Gray
    Write-Host "`n   Then download Android SDK from: https://developer.android.com/studio" -ForegroundColor Yellow
    exit 1
}

# Continue with build
Write-Host "`n🔧 Preparing build environment..." -ForegroundColor Yellow

# Install dependencies
Write-Host "`n📦 Installing npm packages..." -ForegroundColor Cyan
npm install

# Add Android platform if not exists
$platformPath = "platforms/android"
if (!(Test-Path $platformPath)) {
    Write-Host "`n📱 Adding Android platform..." -ForegroundColor Cyan
    cordova platform add android
} else {
    Write-Host "✅ Android platform already added" -ForegroundColor Green
}

# Ask for build type
Write-Host "`n🎯 Select build type:" -ForegroundColor Cyan
Write-Host "1. Debug (faster, for testing)" -ForegroundColor Yellow
Write-Host "2. Release (for production/Play Store)" -ForegroundColor Yellow
$choice = Read-Host "Enter choice (1 or 2)"

# Build APK
Write-Host "`n🔨 Building APK..." -ForegroundColor Cyan
Write-Host "This may take 2-5 minutes..." -ForegroundColor Gray

if ($choice -eq "2") {
    Write-Host "`n📋 Release build selected" -ForegroundColor Yellow
    cordova build android --release
    
    # Check if build succeeded
    if ($LASTEXITCODE -eq 0) {
        Write-Host "`n✅ Release APK build completed!" -ForegroundColor Green
        Write-Host "`n📍 APK location:" -ForegroundColor Cyan
        Write-Host "   platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk" -ForegroundColor Gray
        Write-Host "`n⚠️  Note: Unsigned APK cannot be installed directly." -ForegroundColor Yellow
        Write-Host "   See BUILD-APK.md for signing instructions." -ForegroundColor Gray
    } else {
        Write-Host "`n❌ Release build failed" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "`n📋 Debug build selected" -ForegroundColor Yellow
    cordova build android
    
    # Check if build succeeded
    if ($LASTEXITCODE -eq 0) {
        Write-Host "`n✅ Debug APK build completed!" -ForegroundColor Green
        Write-Host "`n📍 APK location:" -ForegroundColor Cyan
        Write-Host "   platforms/android/app/build/outputs/apk/debug/app-debug.apk" -ForegroundColor Gray
        
        # Check if device/emulator is connected
        Write-Host "`n📱 Checking for connected devices..." -ForegroundColor Yellow
        $devices = adb devices | Select-Object -Skip 1 | Where-Object { $_ -match '\S+\s+device$' }
        
        if ($devices) {
            Write-Host "✅ Connected devices found:" -ForegroundColor Green
            $devices | ForEach-Object { Write-Host "   $_" -ForegroundColor Gray }
            
            $install = Read-Host "`n📲 Install APK on device? (y/n)"
            if ($install -eq "y") {
                Write-Host "`n📲 Installing APK..." -ForegroundColor Cyan
                adb install -r platforms/android/app/build/outputs/apk/debug/app-debug.apk
                
                if ($LASTEXITCODE -eq 0) {
                    Write-Host "`n✅ APK installed successfully!" -ForegroundColor Green
                    
                    $launch = Read-Host "`n🚀 Launch app? (y/n)"
                    if ($launch -eq "y") {
                        Write-Host "`n🚀 Launching NexusAI..." -ForegroundColor Cyan
                        adb shell am start -n com.nexusai.app/.MainActivity
                        Write-Host "`n✅ App launched!" -ForegroundColor Green
                    }
                } else {
                    Write-Host "`n❌ APK installation failed" -ForegroundColor Red
                }
            }
        } else {
            Write-Host "⚠️  No connected devices found" -ForegroundColor Yellow
            Write-Host "`n   To install APK:" -ForegroundColor Gray
            Write-Host "   1. Connect Android device via USB" -ForegroundColor Gray
            Write-Host "   2. Enable USB Debugging in device settings" -ForegroundColor Gray
            Write-Host "   3. Run: adb install platforms/android/app/build/outputs/apk/debug/app-debug.apk" -ForegroundColor Gray
        }
    } else {
        Write-Host "`n❌ Debug build failed" -ForegroundColor Red
        exit 1
    }
}

Write-Host "`n✨ Done!" -ForegroundColor Green
Write-Host "📖 See BUILD-APK.md for detailed instructions." -ForegroundColor Gray
