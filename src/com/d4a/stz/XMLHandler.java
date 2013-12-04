package com.d4a.stz;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;

public class XMLHandler extends DefaultHandler {

	// ===========================================================
	// Fields
	// ===========================================================

	public String el = null;

	private XMLDataSet myParsedExampleDataSet = new XMLDataSet();

	// ===========================================================
	// Getter & Setter
	// ===========================================================

	public XMLDataSet getParsedData() {
		return this.myParsedExampleDataSet;
	}

	// ===========================================================
	// Methods
	// ===========================================================
	@Override
	public void startDocument() throws SAXException {
		this.myParsedExampleDataSet = new XMLDataSet();
	}

	@Override
	public void endDocument() throws SAXException {
		// Nothing to do
	}

	public void setel(String a) {
		el = a;
	}
	/**
	 * Gets be called on opening tags like: <tag> Can provide attribute(s), when
	 * xml was like: <tag attribute="attributeValue">
	 */
	@Override
	public void startElement(String namespaceURI, String localName,
			String qName, Attributes atts) throws SAXException {
		
		if (localName.equals(el)) {

			String attrValue = atts.getValue("name");
			myParsedExampleDataSet.setname(attrValue);

			String attrValue2 = atts.getValue("sym");
			myParsedExampleDataSet.setsym(attrValue2);

			String attrValue3 = atts.getValue("atomicnumber");
			myParsedExampleDataSet.setatomicnumber(attrValue3);

			String attrValue4 = atts.getValue("aw");
			myParsedExampleDataSet.setaw(attrValue4);

			String attrValue5 = atts.getValue("rmst");
			myParsedExampleDataSet.setrmst(attrValue5);

			String attrValue6 = atts.getValue("cat");
			myParsedExampleDataSet.setcat(attrValue6);

			String attrValue7 = atts.getValue("den");
			myParsedExampleDataSet.setden(attrValue7);

			String attrValue8 = atts.getValue("meltpt");
			myParsedExampleDataSet.setmeltpt(attrValue8);

			String attrValue9 = atts.getValue("boilpt");
			myParsedExampleDataSet.setboilpt(attrValue9);

			String attrValue10 = atts.getValue("critpt");
			myParsedExampleDataSet.setcritpt(attrValue10);
			
			String attrValue11 = atts.getValue("crabun");
			myParsedExampleDataSet.setcrabun(attrValue11);
			
			String attrValue12 = atts.getValue("ocabun");
			myParsedExampleDataSet.setocabun(attrValue12);

			String attrValue13 = atts.getValue("ionen");
			myParsedExampleDataSet.setionen(attrValue13);

			String attrValue14 = atts.getValue("elpshell");
			myParsedExampleDataSet.setelpshell(attrValue14);

			attrValue = atts.getValue("vid");
			myParsedExampleDataSet.setvid(attrValue);

		}
	}

	/**
	 * Gets be called on closing tags like: </tag>
	 */
	@Override
	public void endElement(String namespaceURI, String localName, String qName)
			throws SAXException {
	}

	/**
	 * Gets be called on the following structure: <tag>characters</tag>
	 */

}