//
//  RNExampleModule.swift
//  RNExampleModule
//
//  Copyright © 2022 toniebe. All rights reserved.
//

import Foundation

@objc(RNExampleModule)
class RNExampleModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
