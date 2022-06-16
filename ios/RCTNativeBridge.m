//
//  RCTNativeBridge.m
//  ExazeReactNativeProject
//
//  Created by Neosoft on 16/06/22.
//

#import <Foundation/Foundation.h>
#import "RCTNativeBridge.h"

@implementation RCTNativeBridge

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE(NativeBridgeModule);

RCT_EXPORT_METHOD(showMessage:(RCTResponseSenderBlock)callback)
{
  NSLog(@"inside");
 callback(@[@"This app is running in simulator."]);
}

@end
