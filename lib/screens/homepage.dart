import 'package:flutter/material.dart';
import 'package:move_square/widgets/buttons.dart';
import 'package:move_square/widgets/square_box.dart';

class Homepage extends StatefulWidget {
  const Homepage({super.key});

  @override
  State<Homepage> createState() => _HomepageState();
}

class _HomepageState extends State<Homepage> {
  double position = 0;
  final double boxWidth = 100;
  late double screenWidth;
  bool isMoving = false; 

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    screenWidth = MediaQuery.of(context).size.width;
    position = (screenWidth - boxWidth) / 2;
  }

  void moveLeft() {
    setState(() {
      isMoving = true;
      position = 0;
    });
  }

  void moveRight() {
    setState(() {
      isMoving = true;
      position = screenWidth - boxWidth; 
    });
  }

   void restart() {
    setState(() {
      isMoving = true;
      position = (screenWidth - boxWidth) / 2; 
    });
  }

    void onAnimationEnd() {
    setState(() {
      isMoving = false; 
    });
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.only(top: 50),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Button(
                  onPressed:isMoving || position == 0 ? null : moveLeft,
                  text: "Left",
                  icon:  Icons.arrow_circle_left_rounded,
                ),
                const SizedBox(width: 50),

                 Button(
                  onPressed:
                      isMoving || position == (screenWidth - boxWidth) / 2 ? null : restart,
                  text: "Restart",
                  icon: Icons.restart_alt,
                ),
                 const SizedBox(width: 50),
                Button(
                  onPressed:
                      isMoving || position == screenWidth - boxWidth ? null : moveRight,
                  text: "Right",
                  icon: Icons.arrow_circle_right_rounded,
                ),
               
               
              ],
            ),
            const SizedBox(height: 250),
            SquareBox(position: position,onAnimationEnd: onAnimationEnd),
          ],
        ),
      ),
    );
  }
}
