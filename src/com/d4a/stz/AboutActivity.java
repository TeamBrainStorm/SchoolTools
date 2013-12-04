package com.d4a.stz;

import android.app.Activity;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.text.Html;
import android.widget.TextView;
import com.d4a.stz.R;

public class AboutActivity extends Activity {
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
		setContentView(R.layout.activity_about);
		TextView textabout = (TextView) findViewById(R.id.textView1);
		textabout.setText(Html.fromHtml("<p> Maths Man V2.5 by </p><h1> Ahmed Gado </h1><p>from Gado World</p> <h2> Contact Us </h2> <p> ahmedehabg@gmail.com </p> <p> www.facebook.com/ahmedehabg </p>"));
	}
}
