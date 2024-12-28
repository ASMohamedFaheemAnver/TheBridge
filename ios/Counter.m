//
//  Counter.m
//  exampleProject
//
//  Created by Abdul Saleem Mohamed Faheem on 2024-12-28.
//

#import <Foundation/Foundation.h>

// This will help us export function to react native
#import "React/RCTBridgeModule.h"

// Expose counter object
@interface RCT_EXTERN_MODULE (Counter, NSObject)

// Expose increment method
RCT_EXTERN_METHOD(increment : (RCTResponseSenderBlock)callback)

// Expose decrement promise
RCT_EXTERN_METHOD(decrement : (RCTPromiseResolveBlock)
                      resolve reject : (RCTPromiseRejectBlock)reject)

@end
