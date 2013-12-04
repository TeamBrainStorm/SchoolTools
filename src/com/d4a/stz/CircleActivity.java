package com.d4a.stz;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.view.inputmethod.EditorInfo;
import android.view.inputmethod.InputMethodManager;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.TextView.OnEditorActionListener;
import com.d4a.stz.R;


public class CircleActivity extends Activity {

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
		setContentView(R.layout.activity_circle);
		final EditText SearchEditText =(EditText)findViewById(R.id.EditTextMN); 
		SearchEditText.setOnEditorActionListener(new OnEditorActionListener(){  
			@Override
			public boolean onEditorAction(TextView arg0, int arg1, KeyEvent arg2) {
				if(arg1 == EditorInfo.IME_ACTION_GO)  
		        { 
					InputMethodManager imm = (InputMethodManager)getSystemService(
						      Context.INPUT_METHOD_SERVICE);
						imm.hideSoftInputFromWindow(SearchEditText.getWindowToken(), 0);
		            rel(null);
		        }
				return false;
			} 

		}); 
	}

	@SuppressLint("NewApi")
	public void rel(View view) {
		EditText editA = (EditText) findViewById(R.id.EditTextR1);
		EditText editB = (EditText) findViewById(R.id.EditTextR2);
		EditText editC = (EditText) findViewById(R.id.EditTextMN);
		if (!MainActivity.Empty(editA)	&& !MainActivity.Empty(editB)	&& !MainActivity.Empty(editC)) {
			TextView textRes = (TextView) findViewById(R.id.textCirRes);
			double a , b;
			if (Double.parseDouble(editA.getText().toString()) > Double.parseDouble(editB.getText().toString())) {
				 a = Double.parseDouble(editA.getText().toString());
				 b = Double.parseDouble(editB.getText().toString());
			} else {
				 b = Double.parseDouble(editA.getText().toString());
				 a = Double.parseDouble(editB.getText().toString());
				}
			double c = Double.parseDouble(editC.getText().toString());
			if (c > a + b) {
				textRes.setText("The circles are distant");
			} else if (c < a - b) {
				textRes.setText("The circles are one inside the other");
			} else if (c == a + b) {
				textRes.setText("The circles are touching externally");
			} else if (c == a - b) {
				textRes.setText("The circles are touching internally");
			} else if (c == 0) {
				textRes.setText("The circles are concentric");
			} else if (a - b < c && c < a + b){
				textRes.setText("The circles are intersecting");
			}
			}
		}
	}
