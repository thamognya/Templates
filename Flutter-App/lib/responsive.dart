// ignore_for_file: camel_case_types
import 'package:flutter/material.dart';

class responsiveLayout extends StatelessWidget {
  /*
    320px  phone
    481px  small tablet
    641px  portrait tablets
    961px  tablet
    1025px  desktop
    1281px  bigDesktop
  */
  final Widget phoneBody;
  final Widget portraitTabletBody;
  final Widget tabletBody;
  final Widget desktopBody;

  responsiveLayout({
    required this.phoneBody,
    required this.portraitTabletBody,
    required this.tabletBody,
    required this.desktopBody,
  });

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, constraints) {
      if (constraints.maxWidth <= 481) {
        // phone
        return phoneBody;
      } else if (constraints.maxWidth <= 641) {
        // potrait tablet
        return portraitTabletBody;
      } else if (constraints.maxWidth <= 961) {
        // tablet
        return tabletBody;
      } else {
        // desktop
        return desktopBody;
      }
    });
  }
}
