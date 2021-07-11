package com.saxyusuph.demoapp;

import android.os.Bundle; // react-native-bootslash
// import android.view.View;
import com.facebook.react.ReactActivity;

import com.zoontek.rnbootsplash.RNBootSplash; // react-native-bootslash

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "3kle";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // hideNavigationBar();
    RNBootSplash.init(R.drawable.bootsplash, MainActivity.this); // <- display the generated bootsplash.xml drawable over our MainActivity
  }
  
  // @Override
  //   public void onWindowFocusChanged(boolean hasFocus) {
  //       super.onWindowFocusChanged(hasFocus);
  //       if (hasFocus) {
  //           hideNavigationBar();
  //       }
  //   }


  // private void hideNavigationBar() {
  //   getWindow().getDecorView().setSystemUiVisibility(
  //       View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
  //       | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);

  //   }

}
