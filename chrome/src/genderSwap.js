var wordlist = [
	['\\bWoman\\b', 'Woman', 'Woman\\b', 'Man'],
	['\\bwoman\\b', 'woman', '\\bman\\b', 'man'],
	['\\bWomen\\b', 'Women', 'Women\\b', 'Men'],
	['\\bwomen\\b', 'women', '\\bmen\\b', 'men'],
	['Boy\\b', 'Girl', 'Girl\\b', 'Boy'],
	['\\bgirl\\b', 'girl', '\\bboy\\b', 'boy'],
	['He\\b', 'She', 'She\\b', 'He'],
	['\\bshe\\b', 'she', '\\bhe\\b', 'he'],
	['His\\b', 'Her', 'Her\\b', 'His'],
	['\\bher\\b', 'her', '\\bhis\\b', 'his'],
	['\\bher!', 'him!', '\\bhis!', 'his!'],
	['\\bher\\?', 'him?', '\\bhis\\?', 'his?'],
	['\\bher,', 'him,', '\\bhis,', 'his,'],
	['\\bher\\.', 'her', '\\bhis\\.', 'his.'],
	['\\bher:', 'him:', '\\bhis:', 'his:'],
	['\\bhers\\b', 'her', 'Her\\b', 'His'],
	['\\b_AAA_\\b', '_AAA_', '\\bhim\\.', 'his'], // _AAA_ is just unused array filler
	['Male\\b', 'Female', 'Female\\b', 'Male'],
	['\\bfemale\\b', 'female', '\\bmale\\b', 'male'],
	['Husband\\b', 'Wife', 'Wife\\b', 'Husband'],
	['\\bwife\\b', 'wife', '\\bhusband\\b', 'husband'],
	['Father\\b', 'Mother', 'Mother\\b', 'Father'],
	['\\bmother\\b', 'mother', '\\bfather\\b', 'father'],
	['Son\\b', 'Daughter', 'Daughter\\b', 'Son'],
	['\\bdaughter\\b', 'daughter', '\\bson\\b', 'son'],
	['Boyfriend\\b', 'Girlfriend', '\\bBoyfriend\\b', 'Boyfriend'],
	['\\bgirlfriend\\b', 'girlfriend', '\\bboyfriend\\b', 'boyfriend'],
	['Gentleman\\b', 'Lady', 'Lady\\b', 'Gentleman'],
	['\\blady\\b', 'lady', '\\bgentleman\\b', 'gentleman'],
	['Sir\\b', 'Madam', '\\bSir\\b', 'Sir'],
	['\\bSir\\b', 'Madam', '\\bSir\\b', 'Sir'],
	['Mr\\b', 'Mr', '\\bMr\\.', 'Mr'],
	['\\bms.\\b', 'ms', '\\bmr\\.', 'ms'],
	['Mister\\b', 'Ms', '\\bMister\\b', 'Mr'],
	['\\bmiss\\b', 'ms', '\\bmister\\b', 'ms'],
	['King\\b', 'Queen', 'Queen\\b', 'King'],
	['\\bqueen\\b', 'queen', '\\bking\\b', 'king'],
];

walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType ) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;
	// Change all of the male words to _rep_#_ where # is the
	// index number of the word. This is done so replaced words
	// will not get changed back during the second for-loop
	for(var i=wordlist.length-1;i>=0;i--) {
		v = v.replace(RegExp(wordlist[i][0],"g"), '_rep_'+i+'_');
	}
	// Replace all female words with their male counterparts
	for(var i=wordlist.length-1;i>=0;i--) {
		v = v.replace(RegExp(wordlist[i][2],"g"), wordlist[i][3]);
	}
	// Change all _rep_#_ to the corresponding female word
	for(var i=wordlist.length-1;i>=0;i--) {
		v = v.replace(RegExp('_rep_'+i+'_',"g"), wordlist[i][1]);		
	}
	textNode.nodeValue = v;
}
