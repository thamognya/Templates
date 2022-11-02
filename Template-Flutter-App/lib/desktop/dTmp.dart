import 'package:flutter/material.dart';

class pTmp extends StatefulWidget {
  const pTmp({Key? key}) : super(key: key);

  @override
  State<pTmp> createState() => _pTmp();
}

class _pTmp extends State<pTmp> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[200],
      body: SafeArea(
        child: Center(
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
            // Hello Again
            Text(
              'Hello Again!',
              style: GoogleFonts.roboto(
                textStyle: const TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 24,
                ),
              ),
            ),
            const SizedBox(height: 10),
            // Missed You
            const Text(
              'Welcome Back, you\'ve been missed!',
              style: TextStyle(
                fontSize: 20,
              ),
            ),
            const SizedBox(height: 50),
            // Email
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 25.0),
              child: Container(
                decoration: BoxDecoration(
                    color: Colors.grey[100],
                    border: Border.all(color: Colors.white),
                    borderRadius: BorderRadius.circular(10)),
                child: const TextField(
                  //textAlign: TextAlign.center,
                  decoration: InputDecoration(
                    border: InputBorder.none,
                    contentPadding: EdgeInsets.all(20.0),
                    hintText: 'Email@Email',
                  ),
                ),
              ),
            ),
            const SizedBox(height: 10),
            // Password
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 25.0),
              child: Container(
                decoration: BoxDecoration(
                    color: Colors.grey[100],
                    border: Border.all(color: Colors.white),
                    borderRadius: BorderRadius.circular(10)),
                child: const TextField(
                  //textAlign: TextAlign.center,
                  obscureText: true,
                  decoration: InputDecoration(
                    border: InputBorder.none,
                    contentPadding: EdgeInsets.all(20.0),
                    hintText: 'Password',
                  ),
                ),
              ),
            ),
            const SizedBox(height: 15),

            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 50.0),
              child: ElevatedButton(
                  onPressed: () {
                    log("hello");
                  },
                  style: ElevatedButton.styleFrom(
                      primary: Colors.blue[300],
                      padding: const EdgeInsets.symmetric(
                        horizontal: 25.0,
                        vertical: 20.0,
                      )),
                  child: const Text(
                    'Sign In',
                    style: TextStyle(
                      color: Colors.white,
                      fontWeight: FontWeight.bold,
                      fontSize: 18,
                    ),
                  )),
            ),

            const SizedBox(height: 30),
            // not a member sign up
            Row(mainAxisAlignment: MainAxisAlignment.center, children: const [
              Text(
                'Not a member? Don\'t worry ',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                ),
              ),
              Text(
                'Register Now',
                style: TextStyle(
                  color: Colors.blue,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ])
          ]),
        ),
      ),
    );
  }
}
