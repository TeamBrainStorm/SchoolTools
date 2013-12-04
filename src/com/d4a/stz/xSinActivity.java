package com.d4a.stz;

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

public class xSinActivity extends Activity {
EditText editA;
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
		setContentView(R.layout.activity_xsin);
		final EditText SearchEditText =(EditText)findViewById(R.id.editSinR); 
		SearchEditText.setOnEditorActionListener(new OnEditorActionListener(){  
			@Override
			public boolean onEditorAction(TextView arg0, int arg1, KeyEvent arg2) {
				if(arg1 == EditorInfo.IME_ACTION_GO)  
		        { 
					InputMethodManager imm = (InputMethodManager)getSystemService(
						      Context.INPUT_METHOD_SERVICE);
						imm.hideSoftInputFromWindow(SearchEditText.getWindowToken(), 0);
		            sin(null);
		        }
				return false;
			} 

		}); 
	}

	public void sin(View view) {
		EditText editA = (EditText) findViewById(R.id.editSinR);
		if (!MainActivity.Empty(editA)) {
			TextView textRes = (TextView) findViewById(R.id.textSinRes);
			textRes.setText(String.valueOf(format(Math.toDegrees(Math.asin(Double.parseDouble((editA.getText().toString()))))))); }
		}
	
	private double format(double value) {
        return (double)Math.round(value * 1000000) / 1000000; //you can change this to round up the value(for two position use 100...)
    }
	}
