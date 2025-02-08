import 'package:flutter/material.dart';

class Button extends StatelessWidget {
  final String text;
  final IconData icon;
  final VoidCallback? onPressed;


  const Button({super.key, required this.text, required this.icon,required this.onPressed});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        ElevatedButton(
          onPressed: onPressed,
          child: Row(
            children: [
              Text(text,
              style: TextStyle(
                fontSize: 14,
                fontWeight: FontWeight.w500,
                color: const Color.fromARGB(255, 0, 0, 0)
              ),),
              SizedBox(width: 10,),
              Icon(icon,)
            ],
          ),
          
        ),
      ],
    );
  }
}
