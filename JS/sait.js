  gs=["italy", "france", "switzerland","hungary","romania",
  "japan","afghanistan","india","brazilia","canada",
"argentina","kolumbia","england","mexico"]
 /* универсальная функция makeTableFromCountry*/
  function makeTableFromCountry (num,i){
   /*объявляем переменные */
   let div= "<div "+"id="+'"'+gs[i]+'"'+"class="+'"sdf"'+" >";
    tab="<table width=75%>";/*Вывод в виде таблицы шириной 75% от доступного пространства для вывода данных.*/
    let tr="<tr>";
    let td="<td>";
    let h1="<h1>";
    h1+=num[0];/*Вывод государства*/
    h1+="-";/*черта между государством и столицей*/
    h1+=num[1];/*Вывод столицы*/
   td+=h1;
   tr+=td;
    tr+="</tr>"
    tab+=tr
   /*цикл для вывода континента,части света,разницы во времени и денежной еденицы*/
   for (let i=2;i<6;i++)
    {tr="<tr>";
        td="<td>";
        let txt1=about[i];
        let txt2=num[i];
        td+=txt1;
        tr+=td;
        td="<td>";
        td+=txt2;
        tr+=td;
        tab+=tr;}
    let count1=num[6].length;
/*цикл для географических объектов*/   
   for (let i=0;i<count1;i++)
    {   tr="<tr>";
        td="<td>";
        let txt1=about[6];
        let txt2=num[6][i];
        if (i===0)
        {td+=txt1;}
        tr+=td;
        td="<td>";
        td+=txt2;
        tr+=td;
        tab+=tr;}
    tr='<tr id="col">';
    tab+=tr;
    count1=num[7].length;
	/*цикл для литературных произведений объектов*/   
    for (let i=0;i<count1;i++)
    {   tr="<tr>";
        td="<td>";
        txt1=about[7];
        txt2=num[7][i];
        if (i===0)
        {td+=txt1;}
        tr+=td;
        td="<td>";
        td+=txt2;
        tr+=td;
        tab+=tr;}
   let count=0;
   /*цикл для исторических событий */
    for ( let key in num[8])
    {let length=Object.keys(num[8]).length;
        tr="<tr>";
        td="<td>";
        txt1=about[8];
        txt2=num[8][key];
        count++;
        if (count===Math.floor(length/2))
        {td+=txt1;}
        tr+=td;
        td="<td>";
        td+=key;
        td+="-";
        td+=txt2;
        tr+=td;
        tab+=tr;}
    tab+="</table>";
    div+=tab;
    div+="</div>";
    return div;}
var ss=countries.map((num,i)=>{return makeTableFromCountry(num,i)});
ss.forEach(function(info, i, arr) {document.write(info); document.write("<br>");})

