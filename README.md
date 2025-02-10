# Moving Square

A simple Flutter application where a square moves left and right across the screen using buttons. The buttons are disabled when the square is moving or reaches the screen boundaries.

## Features
- Move the square left and right using buttons.
- Buttons are disabled while the square is moving.
- Left button is disabled when the square is at the left edge.
- Right button is disabled when the square is at the right edge.
- Animated movement with smooth transitions.

## Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/moving_square.git
   cd moving_square
   ```
2. **Install dependencies**
   ```sh
   flutter pub get
   ```
3. **Run the app on chrome**
   ```sh
   flutter run -d chrome
   ```

## Usage
- Press **Left** to move the square to the leftmost side.
- Press **Right** to move the square to the rightmost side.
- Buttons become disabled while the square is animating.
- Press **Restart** (if implemented) to reset the square to the center.

## Project Structure
```
lib/
├── main.dart             # Entry point of the app
├── screens/
│   ├── homepage.dart    # Main screen with buttons and square
├── widgets/
│   ├── buttons.dart     # Custom button widget
│   ├── square_box.dart  # Animated moving square widget
```

## Dependencies
Ensure you have Flutter installed and up-to-date.
- Flutter SDK (latest version)
- No third-party dependencies required (uses built-in widgets)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

#
