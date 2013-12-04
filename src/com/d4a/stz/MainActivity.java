package com.d4a.stz;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.EditText;
import com.d4a.stz.R;

@SuppressLint("Registered")
public class MainActivity extends Activity {
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		SharedPreferences prefs = getSharedPreferences("theme",0);
		switch (prefs.getInt("theme", 0)) {
		case 0 :setTheme(R.style.AppTheme_Blue_Dark); break; 
		case 1 :setTheme(R.style.AppTheme_Blue_Light);break; 
		case 2 :setTheme(R.style.AppTheme_Green_Dark);break; 
		case 3 :setTheme(R.style.AppTheme_Green_Light); break; 
		case 4 :setTheme(R.style.AppTheme_Red_Dark);    break; 
		case 5 :setTheme(R.style.AppTheme_Red_Light);   break; 
		case 6 :setTheme(R.style.AppTheme_Orange_Dark);break; 
		case 7 :setTheme(R.style.AppTheme_Orange_Light);break; 
		case 8 :setTheme(R.style.AppTheme_Purple); break; 
		}
		setContentView(R.layout.activity_main);
	}
	
	public void arc (View view) {
		Intent intent = new Intent(this, ArcActivity.class);
		startActivity(intent);
	}
	public void distance3d(View view) {
		Intent intent = new Intent(this, Distance3DActivity.class);
		startActivity(intent);
	}
	public void xSin (View view) {
		Intent intent = new Intent(this, xSinActivity.class);
		startActivity(intent);
	}
	public void xCos (View view) {
		Intent intent = new Intent(this, xCosActivity.class);
		startActivity(intent);
	}
	public void xTan (View view) {
		Intent intent = new Intent(this, xTanActivity.class);
		startActivity(intent);
	}
	public void slope(View view) {
		Intent intent = new Intent(this, SlopeActivity.class);
	    startActivity(intent);
	}
	public void distance(View view) {
		Intent intent = new Intent(this, DistanceActivity.class);
	    startActivity(intent);
	}
	public void mid(View view) {
		Intent intent = new Intent(this, MidActivity.class);
	    startActivity(intent);
	}
	public void formula(View view){
		Intent intent = new Intent(this,FormActivity.class);
		startActivity(intent);
	}
	public void circle(View view){
		Intent intent = new Intent(this,CircleActivity.class);
		startActivity(intent);
	}
	public void circum(View view){
		Intent intent = new Intent(this,CirActivity.class);
		startActivity(intent);
	}
	public void sqr(View view){
		Intent intent = new Intent(this,SqrActivity.class);
		startActivity(intent);
	}
	public void sin(View view){
		Intent intent = new Intent(this,SinActivity.class);
		startActivity(intent);
	}
	public void cos(View view){
		Intent intent = new Intent(this,CosActivity.class);
		startActivity(intent);
	}
	public void tan(View view){
		Intent intent = new Intent(this,TanActivity.class);
		startActivity(intent);
	}
	public void graph(View view){
		Intent intent = new Intent(this,GraphActivity.class);
		startActivity(intent);
	}
	@Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.activity_main, menu);
        return true;
    }
	@Override
	public boolean onOptionsItemSelected(MenuItem item) {
		switch (item.getItemId()) {
		case R.id.menu_theme:   Intent intent = new Intent(this, ThemeActivity.class);
	    						startActivity(intent);
	    						finish(); break;
		case R.id.itemAbout: 	Intent inten = new Intent(this, AboutActivity.class);
								startActivity(inten); break;
        	}
		return super.onOptionsItemSelected(item);
    }
	
	public static boolean Empty(EditText t) {
		return t.getText().length() == 0;
	}
}