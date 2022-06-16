package com.exazereactnativeproject;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;

public class NativeBridgeModule extends ReactContextBaseJavaModule {
    NativeBridgeModule(ReactApplicationContext context) {
        super(context);
    }

    public String getName() {
        return "NativeBridgeModule";
    }
    @ReactMethod
    public void showMessage(Callback callBack) {
        callBack.invoke("This app is running in emulator.");
    }
}
