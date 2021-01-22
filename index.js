message = String.raw`:I7Y[_39w@^I.]Pm/JhAk3:\Ax.0wP^=?wRh?>w=i:=]J^DJ\Kg-JiQ^Ipj=g-6w@b<4_Ax6,w?Z7;YCg/J\Ax<0[D^<. Ax37w=o+4l[]/JZKgI7aAg=JYR^-J=H^99gN^I.wAl>JdAx:=]Ib/=w]x=J]Pk/JaJj?4#P$I/][l+J\El:,jEm3:fgx37wLk9;gO^I<mAx@:mOx+7dE^DJ]Ti6:jAkI?gQmI7]Ox64]QqI<mAxn7]Kg9=][ZI1jAj?0fP^I,^EgI/wAgI,hLk/9\N^I@f[i/@wLe?>wOn<J[Am>0w@b=;YNb>4gJx39iQb/?YJm/Xw%eIAgQlI/aPx>:mPx.JY>h</wMn/J=H^99gN^I>][f/?l=b>JlKn4:mNlI,wHZI8]I^I?Y>e/J]Px;@wAe60wAm+4l[l9@nAg>JhN^=J\Ax6,wL^>4lAx/ChKl3?aKgI>mNx{0fAxp:kO^IAgQlI/]Rk30r[Z67]Nx@:aNx::mNx>=gQo/=w@^=JaJ]3.]O'`

function ord(chaine){
    return chaine.charCodeAt(0)
}
function chr(number){
    return String.fromCharCode(number)
}

function crypt(chaine, key){
    var output = ""
    var key_place = 0
    for(var i=0; i<chaine.length; i++){
        output += chr( ( ( ord(chaine[i]) + ord(key[key_place]) ) % 95) + 33 )
        key_place = (++key_place)%key.length
    }
    return replaceall(output, "`", " ")
}

function decrypt(chaine, key){
    var output = ""
    var key_place = 0

    var chaine = replaceall(chaine, " ", "`")

    for(var i=0; i<chaine.length; i++){
        if(( (ord(chaine[i]) - ord(key[key_place]) + 124) % 95) + 33 == 127){
            output += " "
        }else{
            output += chr( ( (ord(chaine[i]) - ord(key[key_place]) + 124) % 95) + 33 )
        }
        key_place = (++key_place)%key.length
    }
    return output
}
function add_some(chaine){
    var output = 0
    for(var i=0; i<chaine.length; i++){
        output += ord(chaine[i])
    }
    return output
}

function myFunction(){

    var saisie = document.getElementById("input").value;

    if(saisie){
        if(add_some(saisie) == 437){
            document.getElementById("p1").style.color = "#E5BB6F"
            document.getElementById("p1").innerHTML = decrypt(message, saisie)
        }else{
            document.getElementById("p1").style.color = "red"
            document.getElementById("p1").innerHTML = "Mauvais code veuillez réessayer"
        }
    }
}



function replaceall(chaine, chars, replacechar){
    output = ""
    for(var i=0; i<chaine.length; i++){
        if(ord(chaine[i]) == ord(chars)){
            output+=replacechar
        }else{
            output+=chaine[i]
        }
    }
    return output
}

