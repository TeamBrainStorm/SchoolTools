package com.d4a.stz;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;
import com.d4a.stz.R;

public class ThemeActivity extends Activity{
	public SharedPreferences pref;
	public SharedPreferences.Editor editor;

	@SuppressLint("CommitPrefEdits")
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		SharedPreferences prefs = getSharedPreferences("theme", 0);
		switch (prefs.getInt("theme", 0)) {
		case 0:
			setTheme(R.style.AppTheme_Blue_Dark);
			break;
		case 1:
			setTheme(R.style.AppTheme_Blue_Light);
			break;
		case 2:
			setTheme(R.style.AppTheme_Green_Dark);
			break;
		case 3:
			setTheme(R.style.AppTheme_Green_Light);
			break;
		case 4:
			setTheme(R.style.AppTheme_Red_Dark);
			break;
		case 5:
			setTheme(R.style.AppTheme_Red_Light);
			break;
		case 6:
			setTheme(R.style.AppTheme_Orange_Dark);
			break;
		case 7:
			setTheme(R.style.AppTheme_Orange_Light);
			break;
		case 8:
			setTheme(R.style.AppTheme_Purple);
			break;
		}
		setContentView(R.layout.activity_color);
		pref = getSharedPreferences("theme", 0);
		editor = pref.edit(); 
	}
	public void blue_dark(View view) {
		editor.putInt("theme", 0);
		editor.commit(); 
		set();

	}
	public void blue_light(View view) {
		editor.putInt("theme", 1);
		editor.commit(); 
		set();

	}
	public void green_dark(View view) {
		editor.putInt("theme", 2);
		editor.commit(); 
		set();

	}

	public void green_light(View view) {
		editor.putInt("theme", 3);
		editor.commit(); 
		set();

	}

	public void red_dark(View view) {
		editor.putInt("theme", 4);
		editor.commit(); 
		set();

	}

	public void red_light(View view) {
		editor.putInt("theme", 5);
		editor.commit(); 
		set();

	}

	public void orange_dark(View view) {
		editor.putInt("theme", 6);
		editor.commit(); 
		set();
	}

	public void orange_light(View view) {
		editor.putInt("theme", 7);
		editor.commit(); 
		set();
	}

	public void purple(View view) {
		editor.putInt("theme", 8);
		editor.commit();
		set();
	}
	public void set() {
		Toast.makeText(this, "Theme Set", Toast.LENGTH_SHORT).show();
		Intent intent = new Intent(this, MainActivity.class);
	    startActivity(intent);
	    finish();
	}
	@Override  
	public void onBackPressed() {
	    super.onBackPressed();   
	    Intent intent = new Intent(this, MainActivity.class);
	    startActivity(intent);
	    finish();
	}
}
