(function() {

    var wordlist = [
        [/Her\b/g,                  /His(?!_x_)\b/g,                'His',              'Her'],
        [/\bher\b/g,                /\bhim(?!_x_)\b/g,              'him',              'her'],
        [/\bhers\b/g,               /\bhis(?!_x_)\b/g,              'his',              'her'],
        [/\bher\b/g,                /\bhis\.(?!_x_)/g,              'his',              'hers.'],

        [/\bher(\?|\!|\.|,|:|;)/g,  /\bhis\.(?!_x_)/g,              'him$1',            'hers.'],
        [/\bshe\b/g,                /\bhe(?!_x_)\b/g,               'he',               'she'],
        [/She\b/g,                  /He(?!_x_)\b/g,                 'He',               'She'],

        [/\bherself\b/g,            /\bhimself(?!_x_)\b/g,          'himself',          'herself'],

        [/Wom(a|e)n\b/g,            /M(a|e)n(?!_x_)\b/g,            'M$1n',             'Wom$1n'],
        [/\bwom(a|e)n\b/g,          /\bm(a|e)n(?!_x_)\b/g,          'm$1n',             'wom$1n'],

        [/Femininity\b/g,           /Masculinity(?!_x_)\b/g,        'Masculinity',      'Femininity'],
        [/\bfemininity\b/g,         /\bmasculinity(?!_x_)\b/g,      'masculinity',      'femininity'],

        [/Girl(s?)\b/g,             /Boy(s?)(?!_x_)\b/g,            'Boy$1',            'Girl$1'],
        [/\bgirl(s?)\b/g,           /\bboy(s?)(?!_x_)\b/g,          'boy$1',            'girl$1'],

        [/Female(s?)\b/g,           /Male(s?)(?!_x_)\b/g,           'Male$1',           'Female$1'],
        [/\bfemale(s?)\b/g,         /\bmale(s?)(?!_x_)\b/g,         'male$1',           'female$1'],

        [/Wife(s?)\b/g,             /Husband(s?)(?!_x_)\b/g,        'Husband$1',        'Wife$1'],
        [/\bwife(s?)\b/g,           /\bhusband(s?)(?!_x_)\b/g,      'husband$1',        'wife$1'],

        [/Mother(s?)\b/g,           /Father(s?)(?!_x_)\b/g,         'Father$1',         'Mother$1'],
        [/\bmother(s?)\b/g,         /\bfather(s?)(?!_x_)\b/g,       'father$1',         'mother$1'],

        [/Mom(s?)\b/g,              /Dad(s?)(?!_x_)\b/g,            'Dad$1',            'Mom$1'],
        [/\bmom(s?)\b/g,            /\bdad(s?)(?!_x_)\b/g,          'dad$1',            'mom$1'],

        [/Grandmother(s?)\b/g,      /Grandfather(s?)(?!_x_)\b/g,    'Grandfather$1',    'Grandmother$1'],
        [/\bgrandmother(s?)\b/g,    /\bgrandfather(s?)(?!_x_)\b/g,  'grandfather$1',    'grandmother$1'],

        [/Sister(s?)\b/g,           /Brother(s?)(?!_x_)\b/g,        'Brother$1',        'Sister$1'],
        [/\bsister(s?)\b/g,         /\bbrother(s?)(?!_x_)\b/g,      'brother$1',        'sister$1'],

        [/Daughter(s?)\b/g,         /Son(s?)(?!_x_)\b/g,            'Son$1',            'Daughter$1'],
        [/\bdaughter(s?)\b/g,       /\bson(s?)(?!_x_)\b/g,          'son$1',            'daughter$1'],

        [/Niece(s?)\b/g,            /Nephew(s?)(?!_x_)/g,           'Nephew$1',         'Niece$1'],
        [/\bniece(s?)\b/g,          /\bnephew(s?)(?!_x_)\b/g,       'nephew$1',         'niece$1'],

        [/Aunt(s?)\b/g,             /Uncle(s?)(?!_x_)\b/g,          'Uncle$1',          'Aunt$1'],
        [/\baunt(s?)\b/g,           /\buncle(s?)(?!_x_)\b/g,        'uncle$1',          'aunt$1'],

        [/Girlfriend(s?)\b/g,       /Boyfriend(s?)(?!_x_)\b/g,      'Boyfriend$1',      'Girlfriend$1'],
        [/\bgirlfriend(s?)\b/g,     /\bgirlfriend(s?)(?!_x_)\b/g,   'boyfriend$1',      'girlfriend$1'],

        [/Lady(s?)\b/g,             /Gentleman(?!_x_)\b/g,          'Gentleman',        'Lady'],
        [/\blady\b/g,               /\bgentleman(?!_x_)\b/g,        'gentleman',        'lady'],
        [/Ladies\b/g,               /Gentlemen(?!_x_)\b/g,          'Gentlemen',        'Ladies'],
        [/\bladies\b/g,             /\bgentlemen(?!_x_)\b/g,        'gentlemen',        'ladies'],

        [/Miss\b/g,                 /Mister(?!_x_)\b/g,             'Mister',           'Miss'],
        [/\bmiss\b/g,               /\bmister(?!_x_)/g,             'mister',           'miss'],
        [/Ms\b/g,                   /Mr\.(?!_x_)\b/g,               'Mr.',              'Ms.'],
        [/\bms\.+\b/g,              /\bmr\.(?!_x_)/g,               'mr.',              'ms'],
        [/Mrs\.+\b/g,               '',                             'Mr.',              ''],
        [/mrs\.+\b/g,               '',                             'mr.',              ''],

        [/Queen(s?)\b/g,            /King(s?)(?!_x_)\b/g,           'King$1',       'Queen$1'],
        [/\bqueen(s?)\b/g,          /\bking(s?)(?!_x_)\b/g,         'king$1',           'queen$1'],
        
        [/Heroine(s?)\b/g,          /Hero(s?)(?!_x_)\b/g,           'Heroine$1',        'Hero$1'],
        [/\bheroine(s?)\b/g,        /\bhero(s?)(?!_x_)\b/g,         'heroine$1',        'hero$1'],

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
            if(wordlist[i][2] != ''){
                v = v.replace(wordlist[i][0], wordlist[i][2]+'_x_');
            }
        }
        // Replace all male words with their female counterparts
        for(var i=wordlist.length-1;i>=0;i--) {
            if(wordlist[i][3] != ''){
                v = v.replace(wordlist[i][1], wordlist[i][3]);
            }
        }
        // Change all _rep_#_ to the corresponding male word
        for(var i=wordlist.length-1;i>=0;i--) {
            v = v.replace(/_x_/g,  '');
        }
        textNode.nodeValue = v;
    }

    window.addEventListener('DOMContentLoaded', function() {
        walk(document.body);
    }, false);

}());
