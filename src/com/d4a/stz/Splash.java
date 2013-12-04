package com.d4a.stz;

import com.d4a.stz.R;

import android.app.Activity;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.os.Handler;
import android.view.Window;

/* Splash Screen for the program */
public class Splash extends Activity {

	private final int SPLASH_DISPLAY_LENGHT = 2500; // Time for image to be
													// displayed in ms

	/** Called when the activity is first created. */
	@Override
	public void onCreate(Bundle icicle) {
		requestWindowFeature(Window.FEATURE_NO_TITLE); // No title bar
		setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE); // Force
																			// landscape
																			// mode
		super.onCreate(icicle);
		setContentView(R.layout.splash); // Set view to splash.xml

		/*
		 * New Handler to start the Menu-Activity and close this Splash-Screen
		 * after some seconds.
		 */
		new Handler().postDelayed(new Runnable() {
			public void run() {
				/* Create an Intent that will start the Menu-Activity. */
				Intent mainIntent = new Intent(Splash.this, periodictable.class);
				Splash.this.startActivity(mainIntent);
				Splash.this.finish();
			}
		}, SPLASH_DISPLAY_LENGHT);
	}
}