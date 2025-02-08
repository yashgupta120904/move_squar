
import 'package:flutter/material.dart';

class SquareBox extends StatelessWidget {
  final double position;
   final VoidCallback onAnimationEnd;

  const SquareBox({super.key, required this.position,required this.onAnimationEnd});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SizedBox(
        width: double.infinity,
        height: 100,
        child: Stack(
          children: [
            AnimatedPositioned(
              duration: const Duration(seconds: 1),
              curve: Curves.easeInOut,
              left:  position,
              onEnd: onAnimationEnd,
             
              child: Container(
                height: 100,
                width: 100,
                color: const Color.fromARGB(255, 255, 3, 3)
              ),
            ),
          ],
        ),
      ),
    );
  }
}
