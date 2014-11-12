(function() {

    var wordlist = [
        ['\\bWoman\\b', 'Man', 'Man\\b', 'Woman'],
        ['\\bwoman\\b', 'man', '\\bman\\b', 'woman'],
        ['\\bWomen\\b', 'Men', 'Men\\b', 'Women'],
        ['\\bwomen\\b', 'men', '\\bmen\\b', 'women'],
        ['Girl\\b', 'Boy', 'Boy\\b', 'Girl'],
        ['\\bgirl\\b', 'boy', '\\bboy\\b', 'girl'],
        ['She\\b', 'He', 'He\\b', 'She'],
        ['\\bshe\\b', 'he', '\\bhe\\b', 'she'],
        ['Her\\b', 'His', 'His\\b', 'Her'],
        ['\\bher\\b', 'his', '\\bhis\\b', 'her'],
        ['\\bher!', 'him!', '\\bhis!', 'hers!'],
        ['\\bher\\?', 'him?', '\\bhis\\?', 'hers?'],
        ['\\bher,', 'him,', '\\bhis,', 'hers,'],
        ['\\bher\\.', 'him.', '\\bhis\\.', 'hers.'],
        ['\\bher:', 'him:', '\\bhis:', 'hers:'],
        ['\\bhers\\b', 'his', 'His\\b', 'Her'],
        ['\\b_AAA_\\b', '_AAA_', '\\bhim\\.', 'her'], // _AAA_ is just unused array filler
        ['Female\\b', 'Male', 'Male\\b', 'Female'],
        ['\\bfemale\\b', 'male', '\\bmale\\b', 'female'],
        ['Wife\\b', 'Husband', 'Husband\\b', 'Wife'],
        ['\\bwife\\b', 'husband', '\\bhusband\\b', 'wife'],
        ['Mother\\b', 'Father', 'Father\\b', 'Mother'],
        ['\\bmother\\b', 'father', '\\bfather\\b', 'mother'],
        ['Daughter\\b', 'Son', 'Son\\b', 'Daughter'],
        ['\\bdaughter\\b', 'son', '\\bson\\b', 'daughter'],
        ['Girlfriend\\b', 'Boyfriend', '\\bBoyfriend\\b', 'Girlfriend'],
        ['\\bgirlfriend\\b', 'boyfriend', '\\bboyfriend\\b', 'girlfriend'],
        ['Lady\\b', 'Gentleman', 'Gentleman\\b', 'Lady'],
        ['\\blady\\b', 'gentleman', '\\bgentleman\\b', 'lady'],
        ['Madam\\b', 'Sir', '\\bSir\\b', 'Madam'],
        ['\\bMadam\\b', 'Sir', '\\bSir\\b', 'Madam'],
        ['Ms\\b', 'Mr', '\\bMr\\.', 'Ms'],
        ['\\bms.\\b', 'mr.', '\\bmr\\.', 'ms'],
        ['Miss\\b', 'Mister', '\\bMister\\b', 'Ms'],
        ['\\bmiss\\b', 'mister', '\\bmister\\b', 'ms'],
        ['Queen\\b', 'King', 'King\\b', 'Queen'],
        ['\\bqueen\\b', 'king', '\\bking\\b', 'queen'],
    ];


    function walk(node) 
    {
        // I stole this function from here:
        // http://is.gd/mwZp7E
    
        var child, next;
    
        switch ( node.nodeType )  
        {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child ) 
                {
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
        // Change all of the female words to _rep_#_ where # is the
        // index number of the word. This is done so replaced words
        // will not get changed back during the second for-loop
        for(var i=wordlist.length-1;i>=0;i--) {
            v = v.replace(RegExp(wordlist[i][0],"g"), '_rep_'+i+'_');
        }
        // Replace all male words with their female counterparts
        for(var i=wordlist.length-1;i>=0;i--) {
            v = v.replace(RegExp(wordlist[i][2],"g"), wordlist[i][3]);
        }
        // Change all _rep_#_ to the corresponding male word
        for(var i=wordlist.length-1;i>=0;i--) {
            v = v.replace(RegExp('_rep_'+i+'_',"g"), wordlist[i][1]);       
        }
        textNode.nodeValue = v;
    }

    function windowLoadHandler()
    {
        // Dear Mozilla: I hate you for making me do this.
        window.removeEventListener('load', windowLoadHandler);

        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
            walk(e.originalTarget.body);
        });
    }

    window.addEventListener('load', windowLoadHandler);
}());
