package com.d4a.stz;

import org.apache.cordova.DroidGap;

import android.os.Bundle;
import android.view.Menu;
import android.view.Window;
import com.d4a.stz.R;

public class Qcal extends DroidGap {

	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		super.loadUrl("file:///android_asset/www/quadcal.html");
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.qcal, menu);
		return true;
	}

}
