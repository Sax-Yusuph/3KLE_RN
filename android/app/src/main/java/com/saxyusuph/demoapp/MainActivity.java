package com.saxyusuph.demoapp;

import android.os.Bundle; // react-native-bootslash
// import android.view.View;
import com.facebook.react.ReactActivity;

import com.zoontek.rnbootsplash.RNBootSplash; // react-native-bootslash
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

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

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
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
