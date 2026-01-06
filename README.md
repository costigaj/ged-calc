# GED Calculator - TI-30XS Remote Control Simulator

A remote-controlled TI-30XS calculator simulator for classroom/teaching use. Display the calculator on a projector or screen, and control it from your phone.

## Files

- `index.html` - Student display (shows calculator with live button highlighting)
- `remote.html` - Teacher/controller remote (phone-friendly keypad)

## Features

### Working Functions
- Basic math: +, −, ×, ÷
- Square (x²) and Square root (√)
- Fraction entry (n/d button)
- Fraction ↔ decimal toggle (f◄►d)
- 2nd function key
- Arrow keys (for navigating fraction entry)
- Clear and Enter

### Display Features
- MathJax-rendered fractions
- 0.75 second button highlight when remote key is pressed
- Connection status indicator
- TI-30XS color scheme

## Usage

1. Open `index.html` on your display/projector
2. Open `remote.html` on your phone/tablet
3. Both should show "Connected" status
4. Press buttons on remote to control the calculator

## Fraction Entry

1. Press `n/d` to start entering a fraction
2. Enter numerator digits
3. Press `n/d` again (or down arrow) to move to denominator
4. Enter denominator digits
5. Press `enter` or an operator to use the fraction

## Deploying

Host both files on any static web server (Netlify, GitHub Pages, etc.)

## Note

The Ably API key in the code is for testing only. For production use, implement token authentication.
