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

public class SlopeActivity extends Activity {

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		SharedPreferences prefs = getSharedPreferences("theme",0);
		switch (prefs.getInt("theme", 0)) {
		case 0 :setTheme(R.style.AppTheme_Blue_Dark);    break; 
		case 1 :setTheme(R.style.AppTheme_Blue_Light);   break; 
		case 2 :setTheme(R.style.AppTheme_Green_Dark);   break; 
		case 3 :setTheme(R.style.AppTheme_Green_Light);  break; 
		case 4 :setTheme(R.style.AppTheme_Red_Dark);     break; 
		case 5 :setTheme(R.style.AppTheme_Red_Light);    break; 
		case 6 :setTheme(R.style.AppTheme_Orange_Dark);  break; 
		case 7 :setTheme(R.style.AppTheme_Orange_Light); break; 
		case 8 :setTheme(R.style.AppTheme_Purple);       break; 
		}
		setContentView(R.layout.activity_slope);
		final EditText SearchEditText =(EditText)findViewById(R.id.editY2); 
		SearchEditText.setOnEditorActionListener(new OnEditorActionListener(){  
			@Override
			public boolean onEditorAction(TextView arg0, int arg1, KeyEvent arg2) {
				if(arg1 == EditorInfo.IME_ACTION_GO)  
		        { 
					InputMethodManager imm = (InputMethodManager)getSystemService(
						      Context.INPUT_METHOD_SERVICE);
						imm.hideSoftInputFromWindow(SearchEditText.getWindowToken(), 0);
		            slope(null);
		        }
				return false;
			} 

		}); 
	}
	@SuppressLint("NewApi")
	public void slope(View view) {
		EditText editX1 = (EditText) findViewById(R.id.editX1);
		EditText editY1 = (EditText) findViewById(R.id.editY1);
		EditText editX2 = (EditText) findViewById(R.id.editX2);
		EditText editY2 = (EditText) findViewById(R.id.editY2);
		if (!MainActivity.Empty(editX1) && !MainActivity.Empty(editY1) && !MainActivity.Empty(editX2) && !MainActivity.Empty(editY2) ) {
			double X1 = Double.parseDouble(editX1.getText().toString());
			double Y1 = Double.parseDouble(editY1.getText().toString());
			double X2 = Double.parseDouble(editX2.getText().toString());
			double Y2 = Double.parseDouble(editY2.getText().toString());
			if (X1 == X2 && Y1 == Y2) {
				TextView res = (TextView) findViewById(R.id.textRes); 
				res.setText("Enter valid points");
			} else {
			TextView res = (TextView) findViewById(R.id.textRes); 
			Fraction t = new Fraction((Y2 - Y1), (X2 - X1));
			res.setText(t.n()); 
			}
		}
	}
}
