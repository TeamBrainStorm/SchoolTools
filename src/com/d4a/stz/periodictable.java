package com.d4a.stz;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.AlertDialog.Builder;
import android.content.DialogInterface;
import android.content.DialogInterface.OnClickListener;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.widget.ArrayAdapter;
import android.widget.AutoCompleteTextView;
import android.widget.Button;

import org.xml.sax.InputSource;
import org.xml.sax.XMLReader;

import com.d4a.stz.R;

import java.io.InputStream;

import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;

/** Main Table View Class */
public class periodictable extends Activity {
	@Override
	public void onCreate(Bundle savedInstanceState) {
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		super.onCreate(savedInstanceState);
		setContentView(R.layout.main);
		setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);

		Button tm = (Button) findViewById(R.id.transmetbutton);
		tm.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				Intent myIntent = new Intent(periodictable.this, TM.class);
				periodictable.this.startActivity(myIntent);
			}
		});

		/*
		 * Button for the Alkali Metals, Alkaline Earth Metals, and Hydrogen
		 * section
		 */
		Button ak = (Button) findViewById(R.id.alkalinebutton);
		ak.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				Intent myIntent = new Intent(periodictable.this, Alkaline.class);
				periodictable.this.startActivity(myIntent);
			}
		});

		/*
		 * Button for the Post-Transition Metals, Metalloids, Nonmetals,
		 * Halogens, and Noble Gases section
		 */
		Button rt = (Button) findViewById(R.id.rightbutton);
		rt.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				Intent myIntent = new Intent(periodictable.this, Right.class);
				periodictable.this.startActivity(myIntent);
			}
		});

		/* Button for the Lanthanide and Actinide section */
		Button bt = (Button) findViewById(R.id.bottombutton);
		bt.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				Intent myIntent = new Intent(periodictable.this, Bottom.class);
				periodictable.this.startActivity(myIntent);
			}
		});
		/*Code for the search box and autocomplete */
		ArrayAdapter<String> adapter = new ArrayAdapter<String>(this,
				android.R.layout.simple_dropdown_item_1line, ELEMENTS);
		final AutoCompleteTextView auto = (AutoCompleteTextView) findViewById(R.id.search);
		auto.setDropDownWidth(140);
		auto.setHint("Search");
		auto.setAdapter(adapter);
		
		/*Button to enter in search */
		Button go = (Button) findViewById(R.id.go);
		go.setOnClickListener(new View.OnClickListener() {
			public void onClick(View v) {
				String el = auto.getText().toString();
				popup(el);
			}
		});

	}
	/*The list of elements used for autocomplete */
	private static final String[] ELEMENTS = new String[] { "Actinium",
			"Aluminum", "Americium", "Antimony", "Argon", "Arsenic",
			"Astatine", "Barium", "Berkelium", "Beryllium", "Bismuth",
			"Bohrium", "Boron", "Bromine", "Cadmium", "Calcium", "Californium",
			"Carbon", "Cerium", "Cesium", "Chlorine", "Chromium", "Cobalt",
			"Copper", "Curium", "Darmstadtium", "Dubnium", "Dysprosium",
			"Einsteinium", "Erbium", "Europium", "Fermium", "Fluorine",
			"Francium", "Gadolinium", "Gallium", "Germanium", "Gold",
			"Hafnium", "Hassium", "Helium", "Holmium", "Hydrogen", "Indium",
			"Iodine", "Iridium", "Iron", "Krypton", "Lanthanum", "Lawrencium",
			"Lead", "Lithium", "Lutetium", "Magnesium", "Manganese",
			"Meitnerium", "Mendelevium", "Mercury", "Molybdenum", "Neodymium",
			"Neon", "Neptunium", "Nickel", "Niobium", "Nitrogen", "Nobelium",
			"Osmium", "Oxygen", "Palladium", "Phosphorus", "Platinum",
			"Plutonium", "Polonium", "Potassium", "Praseodymium", "Promethium",
			"Protactinium", "Radium", "Radon", "Rhenium", "Rhodium",
			"Rubidium", "Ruthenium", "Rutherfordium", "Samarium", "Scandium",
			"Seaborgium", "Selenium", "Silicon", "Silver", "Sodium",
			"Strontium", "Sulfur", "Fantalum", "Technetium", "Tellurium",
			"Terbium", "Thallium", "Thorium", "Thulium", "Tin", "Titanium",
			"Tungsten", "Ununbium", "Ununnilium", "Ununumium", "Uranium",
			"Vanadium", "Xenon", "Ytterbium", "Yttrium", "Zinc", "Zirconium" };

	public String getParsedMyXML(String el) throws Exception {
		StringBuffer inLine = new StringBuffer();
		/* Get a SAXParser from the SAXPArserFactory. */
		SAXParserFactory spf = SAXParserFactory.newInstance();
		SAXParser sp = spf.newSAXParser();

		/* Get the XMLReader of the SAXParser */
		XMLReader xr = sp.getXMLReader();
		/* Create a new ContentHandler and apply it to the XML-Reader */
		XMLHandler myExampleHandler = new XMLHandler();
		myExampleHandler.setel(el);
		xr.setContentHandler(myExampleHandler);
		/* Load xml file from raw folder */
		InputStream in = this.getResources().openRawResource(R.raw.myxml);
		/* Begin parsing */
		xr.parse(new InputSource(in));
		XMLDataSet parsedExampleDataSet = myExampleHandler.getParsedData();
		inLine.append(parsedExampleDataSet.toString());
		in.close();
		return inLine.toString();

	}

	public String getvidurl(String el) throws Exception {
		StringBuffer inLine = new StringBuffer();
		/* Get a SAXParser from the SAXPArserFactory. */
		SAXParserFactory spf = SAXParserFactory.newInstance();
		SAXParser sp = spf.newSAXParser();
		/* Get the XMLReader of the SAXParser */
		XMLReader xr = sp.getXMLReader();
		/* Create a new ContentHandler and apply it to the XML-Reader */
		XMLHandler myExampleHandler = new XMLHandler();
		myExampleHandler.setel(el);
		xr.setContentHandler(myExampleHandler);
		/* Load xml file from raw folder */
		InputStream in = this.getResources().openRawResource(R.raw.myxml);
		/* Begin parsing */
		xr.parse(new InputSource(in));
		XMLDataSet parsedExampleDataSet = myExampleHandler.getParsedData();
		inLine.append(parsedExampleDataSet.getvid());
		in.close();
		return inLine.toString();

	}
	/** Opens an element to view data */
	public void popup(final String el) {
		Builder builder = new AlertDialog.Builder(periodictable.this);
		builder.setTitle(el);
		builder.setIcon(R.drawable.icon);
		OnClickListener web = new OnClickListener() {
			public void onClick(DialogInterface dialog, int which) {
				String url;
				try {
					url = getvidurl(el);
					Intent i = new Intent(Intent.ACTION_VIEW);
					i.setData(Uri.parse(url));
					startActivity(i);
				} catch (Exception e) {
					e.printStackTrace();
				}

			}
		};
		/*Error message for a miss-written xml node */ 
		try {
			builder.setMessage(getParsedMyXML(el));
		} catch (Exception e1) {
			builder.setMessage("epic fail");
		}
		builder.setNegativeButton("Done", null);
		builder.setPositiveButton("Video", web);
		builder.show();
	}
}
