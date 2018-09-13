package com.doquia;

import android.view.View;

import com.facebook.react.ReactActivity;
import com.reactnativenavigation.controllers.SplashActivity;


public class MainActivity extends SplashActivity {

    @Override
    public void setContentView(View view) {
       setContentView(R.layout.layout_splash);
    }


}
