/**
 * <p>��������: Common.js</p>
 * <p>������: ���ú����������� </p>
 * <p>ע�͸�����: ����</p>
 * <p>�����������: 2002-10-2</p>
 * <p>ע�⣺���еı�������ΪVAR����JAVA�б�ʾΪSTRING<p>
 */

//���ñ���
/** ���ڷָ���,��ʼֵ=":" */
var DATEVALUEDELIMITER=":";
/** ��������ֵ�ķָ���,��ʼֵ=":" */
var NAMEVALUEDELIMITER=":";
/** ��ʼֵ=":" */
var SBCCASECOLON="��";
/** ��֮��ķָ���,��ʼֵ="|" */
var FIELDDELIMITER="|";
/** ��ʼֵ="��" */
var SBCCASEVERTICAL="��";
/** ��¼֮��ķָ���,��ʼֵ="^" */
var RECORDDELIMITER="^";
/** ÿһҳ�����ʾ������,��ʼֵ="10" */
var MAXSCREENLINES=10;
/** �ڴ��д洢������ҳ��,��ʼֵ="20" */
var MAXMEMORYPAGES=20;
/** �޸�(��ɫ),��ʼֵ="FFFF00" */
var BGCOLORU="FFFF00";
/** ���(��ɫ),��ʼֵ="#00F0F0" */
var BGCOLORI="#00F0F0";
/** ɾ��(��ɫ),��ʼֵ="#778899" */
var BGCOLORD="#778899";
/** ��ݲ˵�������� */
var MAXMENUSHORTNUM = 3;


  /**
   * ����ͼƬ
   * <p><b>Example: </b><p>
   * <p>function changeImage(image,gif)<p>
   * @param image ���ͼƬ�Ķ�����ܻ�ҳ��
   * @param gif ͼƬ��ȫ·��
   */
function changeImage(image,gif)
{
	//image.src='/Images/piccSh/'+gif;
	image.src=gif;  //Modify by yt 2002-05-30
}

  /**
   * �滻�ַ�������
   * <p><b>Example: </b><p>
   * <p>replace("Minim123Minim", "123", "Minim") returns "MinimMinimMinim"<p>
   * @param strExpression �ַ������ʽ
   * @param strFind ���滻�����ַ���
   * @param strReplaceWith �滻��Ŀ���ַ���������strReplaceWith�ַ����滻��strFind
   * @return �����滻����ַ������ʽ
   */
function replace(strExpression,strFind,strReplaceWith)
{
  var strReturn;
  var intIndex;
  strReturn = (strExpression==null?"":strExpression);
	
  while((intIndex=strReturn.indexOf(strFind))>-1)
  {	
    strReturn = strReturn.substring(0,intIndex) + strReplaceWith
               + strReturn.substring(intIndex+strFind.length,strReturn.length);
  }
  return strReturn;
}

  /**
   * ȥ���ַ���ͷβ�ո�
   * <p><b>Example: </b><p>
   * <p>trim(" Minim ") returns "Minim"<p>
   * @param strValue �ַ������ʽ
   * @return ͷβ�޿ո���ַ������ʽ
   */
function trim(s)
{
  var strReturn;
  strReturn=s;
  while(strReturn.indexOf(" ")==0) strReturn=strReturn.substring(1);
  if(strReturn.length==0) return "";
  while(strReturn.lastIndexOf(" ")==strReturn.length-1)
  {
    strReturn=strReturn.substring(0,strReturn.length-1);
    if(strReturn.length==0) return "";
  }
  return strReturn;
}

  /**
   * ���������Ƿ���������У��
   * <p><b>Example: </b><p>
   * <p>isInteger("Minim") returns false<p>
   * <p>isInteger("123") returns true<p>
   * @param strValue ������ֵ���ʽ���ַ������ʽ
   * @return ����ֵ��true--������, false--����������
   */
function isInteger(strValue)
{
  var NUM="0123456789";
  var i;
  if(strValue==null || strValue=="") return false;
  for(i=0;i<strValue.length;i++)
  {
    if(NUM.indexOf(strValue.charAt(i))<0) return false;

  }
  return true;
}

  /**
   * ���������Ƿ������ֵ�У��
   * <p><b>Example: </b><p>
   * <p>isNumeric("Minim") returns false<p>
   * <p>isNumeric("123.1") returns true<p>
   * @param strValue ������ֵ���ʽ���ַ������ʽ
   * @return ����ֵ��true--������, false--�������֣�
   */
function isNumeric(strValue)
{
  var NUM="0123456789.";
  var i;
  if(strValue==null ||strValue=="") return false;
  for(i=0;i<strValue.length;i++)
  {
    if(NUM.indexOf(strValue.charAt(i))<0) return false
  }
  if(strValue.indexOf(".")!=strValue.lastIndexOf(".")) return false;
  return true;
}

  /**
   * �뿪��ʱ������У��
   * <p><b>Example: </b><p>
   * <p>checkNumber(HTML.Form.Object.Name)<p>
   * @param Field HTMLҳ��Ķ�������
   * @return true�����һ����errorMessage("������Ϸ�������")��
   */
function checkNumber(Field)
{
	var strValue=Field.value;
	if( trim(strValue)!="" && !isNumeric(strValue) )
	{
	  errorMessage("������Ϸ�������");
		Field.focus();
		Field.select();
		return false;
	}
	return true;
}

  /**
   * �����
   * <p><b>Example: </b><p>
   * <p>checkYear(HTML.Form.Object.Name)<p>
   * @param Field HTMLҳ��Ķ�������
   * @return ����һ����errorMessage("���ӦΪ4λ����")��
   */
function checkYear(Field)
{
	var strValue=Field.value;
	if(trim(strValue)!="" && !(isInteger(strValue) && strValue.length==4 ) )
	{
	  errorMessage("���ӦΪ4λ����");
		Field.focus();
		Field.select();
	}
}

  /**
   * �����
   * <p><b>Example: </b><p>
   * <p>checkMonth(HTML.Form.Object.Name)<p>
   * @param Field HTMLҳ��Ķ�������
   * @return ����һ����errorMessage("�·�ӦΪ1-12֮�������")��
   */
function checkMonth(Field)
{
	var strValue=Field.value;
	if(trim(strValue)!="" && !(isInteger(strValue) && eval(strValue)>0 && eval(strValue)<13 ) )
	{
	  errorMessage("�·�ӦΪ1-12֮�������");
		Field.focus();
		Field.select();
	}
}

  /**
   * �����
   * <p><b>Example: </b><p>
   * <p>checkDay(HTML.Form.Object.Name)<p>
   * @param Field HTMLҳ��Ķ�������
   * @return ����һ����errorMessage("����ӦΪ1-31֮�������")��
   */
function checkDay(Field)
{
	var strValue=Field.value;
	if(trim(strValue)!="" && !(isInteger(strValue) && eval(strValue)>0 && eval(strValue)<32 ) )
	{
	  errorMessage("����ӦΪ1-31֮�������");
		Field.focus();
		Field.select();
	}
}

  /**
   * ���Сʱ
   * <p><b>Example: </b><p>
   * <p>checkHour(HTML.Form.Object.Name)<p>
   * @param Field HTMLҳ��Ķ�������
   * @return ����һ����errorMessage("СʱӦΪ0-24֮�������")��
   */
function checkHour(Field)
{
	var strValue=Field.value;
	if(trim(strValue)!="" && !(isInteger(strValue) && eval(strValue)>=0 && eval(strValue)<=24 ) )
	{
		errorMessage("СʱӦΪ0-24֮�������");
		Field.focus();
		Field.select();
	}
}

  /**
   * ����
   * <p><b>Example: </b><p>
   * <p>hasValue(HTML.Form.Object.Name)<p>
   * @param Field HTMLҳ��Ķ�������
   * @return ����ֵ��true--��ֵ, false--�գ�
   */
function hasValue(Field)
{
	if(Field.value=="")
		return false;
	else
	  return true;
}


  /**
   * �������򰴼�ʱ������У��
   * <p><b>Example: </b><p>
   * <p>checkInteger(window.event)<p>
   * @param Event �������¼�
   * @return ����ֵ��true--����������, false--���˷���������
   */
function checkInteger(e)
{
  var charCode=e.keyCode;
  if(charCode>=48 && charCode<=57)
  {
    return true;
  }
  return false;
}

  /**
   * �������򰴼�ʱ��װ����ʽ��У��(ֻ�������ֺ�*��¼��)
   * <p><b>Example: </b><p>
   * <p>checkBind(window.event)<p>
   * @param Event �������¼�
   * @return ����ֵ��true--����װ����ʽ, false--������װ����ʽ��
   */
function checkBind(e)
{
  var charCode=e.keyCode;
  if(charCode>=48 && charCode<=57 || charCode==42)
  {
    return true;
  }
  return false;
}

  /**
   * �������򰴼�ʱ������У��
   * <p><b>Example: </b><p>
   * <p>checkNumeric(window.event)<p>
   * @param Event �������¼�
   * @return ����ֵ��true--�������ּ�, false--���˷����ּ���
   */
function checkNumeric(e)
{

  var charCode=e.keyCode;
	if(charCode>31 && (charCode<48 || charCode>57) && charCode!=46)
	{
	return false;
	}
	return true;
}
 /**
   * �ж��ַ��Ƿ���s��
   */
function isCharsInBag (s, bag)
{
var i;
for (i = 0; i < s.length; i++)
{
var c = s.charAt(i);
if (bag.indexOf(c) == -1) return false;
}
return true;
}

  /**
   * ���ڵĺϷ��ж�
   * <p><b>Example: </b><p>
   * <p>isLegalDate("2002", "10", "03") returns true<p>
   * <p>isLegalDate("Minim", "10", "03") returns false<p>
   * @param year ����ַ���
   * @param month �·��ַ���
   * @param day �����ַ���
   * @return ����ֵ��true--�Ϸ�����, false--�Ƿ����ڣ�
   */
function isLegalDate(y,m,d)
{
  if(isNaN(parseInt(y,10)) || isNaN(parseInt(m,10)) || isNaN(parseInt(d,10)) )
    return false;
  var dt = new Date(parseInt(y,10),parseInt(m,10)-1,parseInt(d,10));
  if( dt.getYear()==parseInt(y,10) &&
      dt.getMonth()==parseInt(m,10)-1 &&
      dt.getDate()==parseInt(d,10)
    )
    return true;
  else
    return false;
}

  /**
   * ���������Ƿ������ڵ�У��
   * <p><b>Example: </b><p>
   * <p>isDate("2002-10-03") returns true<p>
   * <p>isDate("2002/10/03") returns false<p>
   * @param date �����ַ���,��ʽ����Ϊ��yyyy-mm-dd��
   * @return ����ֵ��true--�Ϸ�����, false--�Ƿ����ڣ�
   */
function isDate(date)
{
  if(date.length > 10) return false;
  var strValue;
  strValue=date.split("-");
  if(strValue.length!=3) return false;
  if(!isInteger(strValue[0]) || !isInteger(strValue[1]) || !isInteger(strValue[2]) ) return false;

  var intYear=eval(strValue[0]);
  var intMonth=eval(strValue[1]);
  var intDay=eval(strValue[2]);

  if( intYear<=0 || intYear>9999 || intMonth<=0 || intMonth>12 || intDay<=0 || intDay>31 ) return false;
  //��Ӷ������У��
  if (2 == intMonth)
  {
  	var day = ((0 == intYear % 4) && (0 != (intYear % 100))) ||(0 == intYear % 400) ? 29 : 28;
  	if(intDay > day)
  	{
  		return false;
  	}
  }
  if (31 == intDay)
  {
  	if(intMonth==1||intMonth==3||intMonth==5||intMonth==7||intMonth==8||intMonth==10||intMonth==12){
  		return true;
  	}else{
  		return false;
  	}
  }
  return true;
}

  /**
   * �������ڸ�ʽΪyyyymmdd
   * ������ڸ�ʽΪyyyy-mm-dd
   */
function modifydate(strDate){
	var stadate;
	//alert(isDate(strDate));
	if (!isDate(strDate))
	{
		var year=strDate.substring(0,4);
		var month=strDate.substring(4,6);
		var day=strDate.substring(6);
		stadate=year+'-'+month+'-'+day;
	 }
	else
		{stadate=strDate;}
		return stadate;
	}

  /**
   * �Ƚ����������ַ���
   * <p><b>Example: </b><p>
   * <p>compareDate("2002-10-03", "2002-10-03") returns 0<p>
   * <p>compareDate("2002-10-03", "2001-10-03") returns 1<p>
   * @param date1 �����ַ���,��ʽ����Ϊ��yyyy-mm-dd��
   * @param date2 �����ַ���,��ʽ����Ϊ��yyyy-mm-dd��
   * @return date1=date2�򷵻�0 , date1>date2�򷵻�1 , date1<date2�򷵻�2
   */
function compareDate(date1,date2)
{
  var strValue=date1.split("-");
  var date1Temp=new Date(strValue[0],strValue[1],strValue[2]);

  strValue=date2.split("-");
  var date2Temp=new Date(strValue[0],strValue[1],strValue[2]);

  if(date1Temp.getTime()==date2Temp.getTime())
    return 0;
  else if(date1Temp.getTime()>date2Temp.getTime())
    return 1;
  else
    return 2;
}

  /**
   * �Ը�ʽ�ַ������н���,����һ����������
   * <p><b>Example: </b><p>
   * <p>splitField("Minim:123|Hzm:456|") returns arrayReturn[Minim]=123;arrayReturn[Hzm]=456<p>
   * @param record ��ʽ�ַ��� FieldName:FieldValue|
   * @return �������� array[FieldName]=FieldValue
   */
function splitField(record)
{
  var arrayField=record.split(FIELDDELIMITER);
  var arrayReturn=new Array();
  var i;
  for(i=0;i<arrayField.length-1;i++)
  {
    var arrayNameValuePair=arrayField[i].split(NAMEVALUEDELIMITER);      //�ָ��һ����������ֵ
    arrayReturn[arrayNameValuePair[0]]=arrayNameValuePair[1];
  }
  return arrayReturn;
}


  /**
   * ��span����ʾ������
   * <p><b>Example: </b><p>
   * <p>showPage(HTML.ImageObject, HTML.SpanObject.ID)<p>
   * @param img ��ʾͼƬ��HTML����
   * @param spanID HTML��SPAN�����ID
   * @return ���ҳ��SPAN�ɼ����������أ�����ʾ��ʾ�رյ�ͼƬ����֮
   */
function showPage(img,spanID)
{
  if(spanID.style.display=="")
  {
    //�ر�
    spanID.style.display="none";
    img.src="../common/images/butCollapse.gif";
  }
  else
  {
    //��
    spanID.style.display="";
    img.src="../common/images/butExpand.gif";
  }
}

  /**
   * ��span����ʾonly
   * <p><b>Example: </b><p>
   * <p>showPageOnly(HTML.ImageObject, HTML.SpanObject.ID)<p>
   * @param img ��ʾͼƬ��HTML����
   * @param spanID HTML��SPAN�����ID
   */
function showPageOnly(img,spanID)
{
  //��
  spanID.style.display="";
  img.src="/Images/piccSh/butExpand.gif";
}

  /**
   * ��һ������
   * <p><b>Example: </b><p>
   * <p>openWindow("www.163.com", null)<p>
   * @param strURL �´��ڵ�����·����URL�������·��
   * @param strName ָ��������������Ϊ��
   * @return �����½����ڵľ��
   */
function openWindow(strURL,strName)
{
  var newWindow = window.open(strURL,strName,'width=640,height=480,top=0,left=0,toolbar=0,location=0,directories=0,menubar=0,scrollbars=1,resizable=1,status=0');
  newWindow.focus();
  return newWindow;
}

  /**
   * �ָ���벢����select����
   * <p><b>Example: </b><p>
   * <p>setOption("name", "1=Minim&2=Hzm");�����������п�����ѡ��Minim��Hzm<p>
   * @param selectName HTML��select������
   * @param strValue ����select������ʾ���ݵ��ַ��������ĸ�ʽ����Ϊ: value1=text1&value2=text2���ԡ�&"�ŷָ�
   */
function setOption(selectName,strValue)
{
  var arrayField=strValue.split("&");
  var i=0;
  fm.all(selectName).length = 0;
  while(i<arrayField.length)
  {
    var option=document.createElement("option");
    var arrayTemp=arrayField[i].split("=");
    var strFieldName=arrayTemp[0];
    var strFieldValue=unescape(arrayTemp[1]);
    option.value=strFieldName;
    option.text=strFieldValue;
    fm.all(selectName).add(option);
    i++;
  }
}

  /**
   * ��ָ���ı���ǰ��0��ֱ������ָ��λ��
   * <p><b>Example: </b><p>
   * <p>addZero("Minim", 10) returns "00000Minim"<p>
   * @param strValue ��Ҫ��0���ַ���
   * @param intLen ��0���ַ����ĳ���
   * @return ��0������Ҫ�󳤶ȵ��ַ���
   */
function addZero(strValue,intLen)
{
	var i,len;
	var strRet;
	strRet=strValue.toString();
	len=strRet.length;
	if (len<intLen)
	{
		while (strRet.length!=intLen)
		{
			strRet="0"+strRet;
		}
		return strRet;
	}
	else
	{
		return strRet;
	}
}

  /**
   * ��д������onkeypressʱ���ø÷���������ʹ���������Զ�ת���ɴ�д
   * <p><b>Example: </b><p>
   * <p>uppercaseKey()<p>
   */
function uppercaseKey()
{
  var keycode = window.event.keyCode;
  if( keycode>=97 && keycode<=122 )
  {
    window.event.keyCode = keycode-32;
  }
}

  /**
   * ʹHTML��FORM����ڵ�����Ԫ�غͶ�������Ч
   * <p><b>Example: </b><p>
   * <p>setFormAllDisabled()<p>
   */
function setFormAllDisabled()
{
  var i = 0;
  for(i=0;i<fm.elements.length;i++)
	{
			fm.elements[i].disabled=true;
	}
}

  /**
   * ʹHTML��FORM����ڵ�����Ԫ�غͶ�������Ч����setFormAllDisabled���
   * <p><b>Example: </b><p>
   * <p>setFormAllEnabled()<p>
   */
function setFormAllEnabled()
{
  var i = 0;
  for(i=0;i<fm.elements.length;i++)
	{
			fm.elements[i].disabled=false;
	}
}

/** ���ұ���ܺ����Ļ��������� */
var arrayCollect = new Array();    //����������

  /**
   * ���� (����,�ұ�����,��������,��������)
   * <p><b>Example: </b><p>
   * <p>��ȱ�������ҵ������Ա���<p>
   * @param intNum ����
   * @param CN �ұ�����
   * @param Amt ��������
   * @param Prm ��������
   * @return ֱ��Ϊȫ�ֱ�������������arrayCollect��ֵ
   */
function collectFee(intNum,CN,Amt,Prm )
{
  var arrayCollectOne ;
  for(i=0;i<intNum;i++)
  {
    var strCN      = fm.all(CN)[i].value;
    var strAmount  = fm.all(Amt)[i].value;
    var strPremium = fm.all(Prm)[i].value;
    var existFlag  = false;

    if(!isNumeric(strAmount))
      strAmount=0;
    else
      strAmount=eval(strAmount);
    if(!isNumeric(strPremium))
      strPremium=0;
    else
      strPremium=eval(strPremium);

    for(j=0;j<arrayCollect.length;j++)
    {
      if( arrayCollect[j]["CN"] == strCN )
      {
        existFlag = true;
        break;
      }
    }
    if(!existFlag)
    {
      arrayCollectOne = new Array(); //һ��������
      arrayCollectOne["CN"] = strCN;
      arrayCollectOne["Amount"] = strAmount;
      arrayCollectOne["Premium"] = strPremium;
      arrayCollect[j] = arrayCollectOne;
    }
    else
    {
      arrayCollect[j]["Amount"] = arrayCollect[j]["Amount"] + strAmount ;
      arrayCollect[j]["Premium"] = arrayCollect[j]["Premium"] + strPremium ;
    }
  }
}

/**
 * ��ȡ���ڶ���
 * @param strDate �����ַ���
 * @param splitOp �ָ��
 * @return �������ڶ���
 */
function getDate(strDate, splitOp) {
  if (splitOp == null) splitOp = "-";

  var arrDate = strDate.split(splitOp);
  if (arrDate[1].length == 1) arrDate[1] = "0" + arrDate[1];
  if (arrDate[2].length == 1) arrDate[2] = "0" + arrDate[2];

  return new Date(arrDate[0], arrDate[1]-1, arrDate[2]);
}

  /**
   * �����������ڵĲ�,���ز������(M)������(D) (����������2.29��һ��)
   * <p><b>Example: </b><p>
   * <p>dateDiff("2002-10-1", "2002-10-3", "D") returns "2"<p>
   * <p>dateDiff("2002-1-1", "2002-10-3", "M") returns "9"<p>
   * @param dateStart ������
   * @param dateEnd ��������
   * @param MD ��ǣ���M��ΪҪ�󷵻ز����������D��ΪҪ�󷵻ز������
   * @return �����������ڲ������(M)������(D)
   */
function dateDiff(dateStart,dateEnd,MD)
{
  if(dateStart==""||dateEnd=="")
  {
  	return false;
  }
  if (typeof(dateStart) == "string") {
    dateStart = getDate(dateStart);
  }

  if (typeof(dateEnd) == "string") {
    dateEnd = getDate(dateEnd);
  }

  var i;
  if(MD=="D") //��������
  {
    var endD = dateEnd.getDate();
    var endM = dateEnd.getMonth();
    var endY = dateEnd.getFullYear();
    var startD = dateStart.getDate();
    var startM = dateStart.getMonth();
    var startY = dateStart.getFullYear();
    var startT=new Date(startY,startM,startD);
    var endT=new Date(endY,endM,endD);
    var diffDay=(endT.valueOf()-startT.valueOf())/86400000;
    return diffDay;
  }
  else //���¼����
  {
    var endD = dateEnd.getDate();
    var endM = dateEnd.getMonth();
    var endY = dateEnd.getFullYear();
    var startD = dateStart.getDate();
    var startM = dateStart.getMonth();
    var startY = dateStart.getFullYear();

    if(endD>=startD)
    {
      return (endY-startY)*12 + (endM-startM) + 1;
    }
    else
    {
      return (endY-startY)*12 + (endM-startM);
    }
  }
}
/*
function dateDiff(dateStart,dateEnd,MD)
{
  if (typeof(dateStart) == "string") {
    dateStart = getDate(dateStart);
  }

  if (typeof(dateEnd) == "string") {
    dateEnd = getDate(dateEnd);
  }

  var i;
  if(MD=="D") //��������
  {
    var endTm = dateEnd.getTime();
    var startTm = dateStart.getTime();
    var diffDay = (endTm - startTm)/86400000 + 1;
    var dateL;
    for(i=dateStart.getFullYear();i<=dateEnd.getFullYear();i++)
    {
      dateL = new Date(i,1,29); //���Ź���һ�������2��29��
      if( dateL.getDate()==29 &&      //�жϹ���ɹ���
          dateL.getTime()>=startTm && //�жϸ��������ʼ���ں�
          dateL.getTime()<=endTm      // ��ֹ����֮��
        )  diffDay--;
    }
    return diffDay;
  }
  else //���¼����
  {
    var endD = dateEnd.getDate();
    var endM = dateEnd.getMonth();
    var endY = dateEnd.getFullYear();
    var startD = dateStart.getDate();
    var startM = dateStart.getMonth();
    var startY = dateStart.getFullYear();

    if(endD>=startD)
    {
      return (endY-startY)*12 + (endM-startM) + 1;
    }
    else
    {
      return (endY-startY)*12 + (endM-startM);
    }
  }
}
*/
  /**
   * ����HTMLԪ�ض���ı���ɫ
   * <p><b>Example: </b><p>
   * <p>setBackColor(HTML.Form.Object.Name, "red")<p>
   * <p>setBackColor(HTML.Form.Object.Name, "#ff0000")<p>
   * @param Field HTMLҳ��Ķ�������
   * @param bcolor ��ɫ���ַ������16λ��
   */
function setBackColor(Field,bcolor)
{
  Field.style.backgroundColor = bcolor;
}

  /**
   * ����ͨ���ֵ�ı�ʱ,����ı���ɫ����Ϊ��ǰҳ�ı���ɫ
   * <p><b>Example: </b><p>
   * <p>commonBlur(HTML.Form.Object.Name)<p>
   * @param Field HTMLҳ��Ķ�������
   */
function commonBlur(Field)
{
  var oldValue = eval("old"+Field.name);
  if( Field.value==oldValue )
    setBackColor(Field,"");
  else
    setBackColor(Field,BGCOLORU);
}

  /**
   * �������������ֵ�ı�ʱ���ñ���ɫ(��ʾ����)
   * <p><b>Example: </b><p>
   * <p>δ֪��ʹ�ú�������<p>
   * @param Field HTMLҳ��Ķ�������
   * @param PageName δ֪��ʹ�ú�������
   */
function mulline1Blur(Field,PageName)
{
  var i;
  var flen=fm.all(Field.name).length;
  var index=0;
  var oldValue;
  for(i=0;i<flen;i++)
  {
    if( fm.all(Field.name)[i]==Field )
    {
      index = i;
      break;
    }
  }
  if( index+1>eval("old"+PageName+"Num") ) return ;
  oldValue = eval("old"+Field.name+"["+index+"]");
  if( Field.value==oldValue )
    setBackColor(Field,"");
  else
    setBackColor(Field,BGCOLORU);

}

  /**
   * �������������ֵ�ı�ʱ���ñ���ɫ(��ʾһ��)
   * <p><b>Example: </b><p>
   * <p>δ֪��ʹ�ú�������<p>
   * @param Field HTMLҳ��Ķ�������
   * @param PageName δ֪��ʹ�ú�������
   */
function mulline2Blur(Field,PageName)
{
  var index=0;
  index = pagesAttributes[PageName]["curindex"];
  if( index+1>eval("old"+PageName+"Num") ) return ;
  oldValue = eval("old"+Field.name+"["+index+"]");
  if( Field.value==oldValue )
    setBackColor(Field,"");
  else
    setBackColor(Field,BGCOLORU);
}

  /**
   * ���������ֵ��ָ�������꣨ex,ey���У�ͨ��span��ʾ����
   * @param oldValue �������ֵ
   * @param ex X����
   * @param ey Y����
   */
function showOldValue(oldValue,ex,ey)
{
  spanOldValue.innerHTML = oldValue;
  spanOldValue.style.left=ex;
  spanOldValue.style.top=ey;
  spanOldValue.style.display ='';
}

  /**
   * ͨ����span����Ϊ���ɼ���NONE��������ֵ
   */
function hideOldValue()
{
  spanOldValue.style.display ='none';
}

  /**
   * ��ͨ��mouseover�¼�������ʹ��δ֪��ʹ�ú�������
   * @param Field HTMLҳ��Ķ�������
   */
function commonOldValue(Field)
{
  var i;
  var oldValue = eval("old"+Field.name);
  if( Field.value!=oldValue )
  {
    var ex=window.event.clientX+document.body.scrollLeft;
    var ey=window.event.clientY+document.body.scrollTop;
    if( Field.tagName == "SELECT" )
    {
			for(i=0;i<Field.options.length;i++)
			{
				if(Field.options[i].value==oldValue)
				{
				  oldValue = Field.options[i].text;
				  break;
				}
      }
    }
    showOldValue(oldValue,ex,ey);
  }
}

  /**
   * �����������mouseover�¼�(��ʾ����)������ʹ��δ֪��ʹ�ú�������
   * @param Field HTMLҳ��Ķ�������
   */
function mulline1OldValue(Field,PageName)
{
  var i;
  var flen=fm.all(Field.name).length;
  var index=0;
  var oldValue;
  for(i=0;i<flen;i++)
  {
    if( fm.all(Field.name)[i]==Field )
    {
      index = i;
      break;
    }
  }
  if( index+1>eval("old"+PageName+"Num") ) return ;
  oldValue = eval("old"+Field.name+"["+index+"]");
  if( Field.value!=oldValue )
  {
    var ex=window.event.clientX+document.body.scrollLeft;
    var ey=window.event.clientY+document.body.scrollTop;
    if( Field.tagName == "SELECT" )
    {
			for(i=0;i<Field.options.length;i++)
			{
				if(Field.options[i].value==oldValue)
				{
				  oldValue = Field.options[i].text;
				  break;
				}
      }
    }
    showOldValue(oldValue,ex,ey);
  }

}

  /**
   * �����������mouseover�¼�(��ʾһ��)������ʹ��δ֪��ʹ�ú�������
   * @param Field HTMLҳ��Ķ�������
   */
function mulline2OldValue(Field,PageName)
{
  var index=0;
  index = pagesAttributes[PageName]["curindex"];
  if( index+1>eval("old"+PageName+"Num") ) return ;
  oldValue = eval("old"+Field.name+"["+index+"]");
  if( Field.value!=oldValue )
  {
    var ex=window.event.clientX+document.body.scrollLeft;
    var ey=window.event.clientY+document.body.scrollTop;
    if( Field.tagName == "SELECT" )
    {
			for(i=0;i<Field.options.length;i++)
			{
				if(Field.options[i].value==oldValue)
				{
				  oldValue = Field.options[i].text;
				  break;
				}
      }
    }
    showOldValue(oldValue,ex,ey);
  }

}

  /**
   * ���ĵ�����ɾ����־������ʹ��δ֪��ʹ�ú�������
   * @param flagName δ֪��ʹ�ú�������
   * @return δ֪��ʹ�ú�������
   */
function setFlagText(flagName)
{
  var i;
  var flagText = "";
  for(i=0;i<eval(flagName+".length");i++)
  {
    flagText = flagText + "<input name='" + flagName+"s' "
                        + "value='" + eval(flagName+"["+i+"]") + "'>";
  }
  return flagText;
}

  /**
   * �ӱ�(����)������ʹ��δ֪��ʹ�ú�������
   * @param vNewAmount δ֪��ʹ�ú�������
   * @param vOldAmount δ֪��ʹ�ú�������
   * @param vNewRate δ֪��ʹ�ú�������
   * @param vOldRate δ֪��ʹ�ú�������
   * @param vDiscount δ֪��ʹ�ú�������
   * @param vShortRate δ֪��ʹ�ú�������
   * @return δ֪��ʹ�ú�������
   */
function incAmount(vNewAmount,vOldAmount,vNewRate,vOldRate,vDiscount,vShortRate)
{
  var Dpremium =
    ( parseFloat(vNewAmount)-parseFloat(vOldAmount) ) * parseFloat(vNewRate) * parseFloat(vDiscount) * parseFloat(vShortRate)
    + parseFloat(vOldAmount) * ( parseFloat(vNewRate) - parseFloat(vOldRate) )  * parseFloat(vDiscount) * parseFloat(vShortRate);

  return Dpremium;
}

  /**
   * ����(����)������ʹ��δ֪��ʹ�ú�������
   * @param vNewAmount δ֪��ʹ�ú�������
   * @param vOldAmount δ֪��ʹ�ú�������
   * @param vNewRate δ֪��ʹ�ú�������
   * @param vOldRate δ֪��ʹ�ú�������
   * @param vDiscount δ֪��ʹ�ú�������
   * @param vOldShortRate δ֪��ʹ�ú�������
   * @param vOverShortRate δ֪��ʹ�ú�������
   * @return δ֪��ʹ�ú�������
   */
function decAmount(vNewAmount,vOldAmount,vNewRate,vOldRate,vDiscount,vOldShortRate,vOverShortRate)
{
  var Dpremium =
    ( parseFloat(vNewAmount)-parseFloat(vOldAmount) ) * parseFloat(vNewRate) * parseFloat(vDiscount)
    * ( parseFloat(vOldShortRate) - parseFloat(vOverShortRate) )
    + parseFloat(vOldAmount) * ( parseFloat(vNewRate) - parseFloat(vOldRate) )  * parseFloat(vDiscount)
    * ( parseFloat(vOldShortRate) - parseFloat(vOverShortRate) );

  return Dpremium;
}

  /**
   * �ӱ�(��������)������ʹ��δ֪��ʹ�ú�������
   * @param vAmount δ֪��ʹ�ú�������
   * @param vRate δ֪��ʹ�ú�������
   * @param vDiscount δ֪��ʹ�ú�������
   * @param vShortRate δ֪��ʹ�ú�������
   * @return δ֪��ʹ�ú�������
   */
function incTime(vAmount,vRate,vDiscount,vShortRate)
{
  var Dpremium =
    parseFloat(vAmount) * parseFloat(vRate) * parseFloat(vDiscount) * parseFloat(vShortRate);
  return Dpremium;
}

  /**
   * ����(��������)������ʹ��δ֪��ʹ�ú�������
   * @param vAmount δ֪��ʹ�ú�������
   * @param vRate δ֪��ʹ�ú�������
   * @param vDiscount δ֪��ʹ�ú�������
   * @param vOldShortRate δ֪��ʹ�ú�������
   * @param vNewShortRate δ֪��ʹ�ú�������
   * @return δ֪��ʹ�ú�������
   */
function decTime(vAmount,vRate,vDiscount,vOldShortRate,vNewShortRate)
{
  var Dpremium =
    parseFloat(vAmount) * parseFloat(vRate) * parseFloat(vDiscount)
    * ( parseFloat(vNewShortRate) - parseFloat(vOldShortRate) );
  return Dpremium;
}

  /**
   * ����ֵ��������Ϊ����ֵ��isMulti��ʾ�����Ƿ�Ϊ���������
   * <p><b>Example: </b><p>
   * <p>setEmpty([name1,name2], [Minim, Hzm], 2)<p>
   * @param FieldName HTMLҳ��Ķ�������
   * @param FieldValue Ҫ���������ֵ
   * @param isMulti ��־������ǵ��������Ƕ�������
   */
function setEmpty(FieldName,FieldValue,isMulti)
{
		var i = 0;
		if (!isMulti)
		{
			if (fm.all(FieldName).value == "")
				fm.all(FieldName).value = FieldValue;
		}
		else
		{
			for(i = 0; i< fm.all(FieldName).length; i++)
			{
				theField = fm.all(FieldName)[i];
				if (trim(theField.value) == "" || eval(theField.value) == 0)
					theField.value = FieldValue;
			}
		}
}

  /**
   * ���ĵļ��㱣��(����仯ʱ)������ʹ��δ֪��ʹ�ú�������
   * @param Field δ֪��ʹ�ú�������
   * @param ext δ֪��ʹ�ú�������
   */
function calAmountPremium(Field,ext)
{
	var fieldname=Field.name;
	var i = 0;
	var findex=0;
	//�õ�������
	for(i=0;i<fm.all(fieldname).length;i++)
	{
		if( fm.all(fieldname)[i] == Field )
		{
			findex=i;
			break;
		}
	}
	//�õ���ֵ
	var amountValue    = fm.all("Amount"+ext)[findex].value;         //�±���
	var rateValue      = fm.all("Rate"+ext)[findex].value;           //�·���
	var shortRateValue = fm.all("ShortRate"+ext)[findex].value;      //δ�˶��ڷ���
	var discountValue  = fm.all("Discount"+ext)[findex].value;       //�ۿ���
	var vShortrateFlag = fm.all("ShortrateFlag"+ext)[findex].value;  //���ڷ��ʷ�ʽ
	//����ֵ�ĺϷ���
	if(vShortrateFlag=="1") vShortrateFlag = "M";
	else vShortrateFlag = "D";

	if( !isNumeric(amountValue) || !isNumeric(rateValue)
	    || !isNumeric(discountValue) || !isNumeric(shortRateValue) ) return ;
	if( eval(amountValue)<0 || eval(rateValue)<0
		  || eval(discountValue)<0 || eval(shortRateValue)<0) return ;

  //ԭֵ����
	var pv = 0;             //����
	var dpv = 0;            //���ѱ仯��
	var vOldAmount = 0;     //ԭ����
	var vOldRate = 0 ;      //ԭ����
	var vShortRate = 0;     //ԭ���ڷ���
	var vOverShortRate = 0; //�������ζ��ڷ���
	if( findex < eval("oldAmount"+ext+".length") ) //�޸ı��
	{
	  pv = eval("oldPremium"+ext+"["+findex+"]");        //ԭ����
	  vOldAmount = eval("oldAmount"+ext+"["+findex+"]"); //ԭ����
	  vOldRate   = eval("oldRate"+ext+"["+findex+"]");   //ԭ����
	}
	else
	{
	  pv = 0;         //ԭ����
	  vOldAmount = 0; //ԭ����
	  vOldRate = 0;   //ԭ����
	}

	//����
	var sdate,edate,pdate,pprevdate;
  var tmpd = fm.ValidDate.value.split("/");
  pdate = new Date(tmpd[0],parseInt(tmpd[1],10)-1,tmpd[2]);
  sdate = new Date(fm.StartDateYear.value,parseInt(fm.StartDateMonth.value,10)-1,fm.StartDateDay.value );
  edate = new Date(fm.EndDateYear.value,parseInt(fm.EndDateMonth.value,10)-1,fm.EndDateDay.value );
  pprevdate = new Date(pdate.getYear(),pdate.getMonth(),pdate.getDate()-1);

  //δ�����ζ��ڷ���
  if( vShortrateFlag=="M" )
    shortRateValue = monthToRate(dateDiff(pdate,edate,vShortrateFlag));
  else
    shortRateValue = dateDiff(pdate,edate,vShortrateFlag)/365;
  //ԭ���ڷ���
  if( vShortrateFlag=="M" )
    vShortRate = monthToRate(dateDiff(sdate,edate,vShortrateFlag));
  else
    vShortRate = dateDiff(sdate,edate,vShortrateFlag)/365;
  //�������ζ��ڷ���
  if( vShortrateFlag=="M" )
    vOverShortRate = monthToRate(dateDiff(sdate,pprevdate,vShortrateFlag));
  else
    vOverShortRate = dateDiff(sdate,pprevdate,vShortrateFlag)/365;
	if( vOldAmount==0 || vOldAmount<=parseFloat(amountValue) )
	{
	  dpv = incAmount( parseFloat(amountValue),
	             vOldAmount,
	             parseFloat(rateValue)/1000,
	             parseFloat(vOldRate)/1000,
	             discountValue/100,
	             shortRateValue);
	}
	else
	{
	  dpv = decAmount( parseFloat(amountValue),
	             vOldAmount,
	             parseFloat(rateValue)/1000,
	             parseFloat(vOldRate)/1000,
	             discountValue/100,
	             vShortRate,
	             vOverShortRate
	             );
	}

	pv = parseFloat(pv) + dpv;
	pv = pointTwo(mathRound(pv));
	fm.all("Premium"+ext)[findex].value= pv;
	fm.all("Premium"+ext)[findex].onchange();
}

  /**
   * ���ĵļ��㱣��(�������ޱ仯ʱ)������ʹ��δ֪��ʹ�ú�������
   * @param Field δ֪��ʹ�ú�������
   * @param ext δ֪��ʹ�ú�������
   */
function calTimePremium(fieldname,ext)
{
  var i;

	var vShortRate = 0;     //ԭ���ڷ���(��-ԭ�ձ�)
	var vOverShortRate = 0; //�������ζ��ڷ���(��-���ձ�)
  var shortRateValue = 0; //δ�˶��ڷ���(ԭ�ձ�-���ձ�)
	//����
	var sdate,edate,pdate,enextdate;
  pdate = new Date(fm.EndDateYear.value,parseInt(fm.EndDateMonth.value,10)-1,fm.EndDateDay.value );
  sdate = new Date(fm.StartDateYear.value,parseInt(fm.StartDateMonth.value,10)-1,fm.StartDateDay.value );
  edate = new Date(oldEndDateYear,parseInt(oldEndDateMonth,10)-1,oldEndDateDay);
  enextdate = new Date(edate.getYear(),edate.getMonth(),edate.getDate()+1);

  //�����������
  for(i=0;i<parseInt(fm.all(fieldname).value,10);i++)
  {
  	//�õ���ֵ
  	var amountValue    = fm.all("Amount"+ext)       [i].value;  //�±���
  	var rateValue      = fm.all("Rate"+ext)         [i].value;  //�·���
  	var discountValue  = fm.all("Discount"+ext)     [i].value;  //�ۿ���
    var vShortrateFlag = fm.all("ShortrateFlag"+ext)[i].value;  //���ڷ��ʷ�ʽ
  	if(vShortrateFlag=="1") vShortrateFlag = "M";
  	else vShortrateFlag = "D";
    //δ�����ζ��ڷ���
    if( vShortrateFlag=="M" )
      shortRateValue = monthToRate(dateDiff(enextdate,pdate,vShortrateFlag));
    else
      shortRateValue = dateDiff(edate,pdate,vShortrateFlag)/365;
    //ԭ���ڷ���
    if( vShortrateFlag=="M" )
      vShortRate = monthToRate(dateDiff(sdate,edate,vShortrateFlag));
    else
      vShortRate = dateDiff(sdate,edate,vShortrateFlag)/365;
    //�������ζ��ڷ���
    if( vShortrateFlag=="M" )
      vOverShortRate = monthToRate(dateDiff(sdate,pdate,vShortrateFlag));
    else
      vOverShortRate = dateDiff(sdate,pdate,vShortrateFlag)/365;

  	//����ֵ�ĺϷ���
  	if( !isNumeric(amountValue) || !isNumeric(rateValue)
  	    || !isNumeric(discountValue) ) continue;
  	if( eval(amountValue)<0 || eval(rateValue)<0
  		  || eval(discountValue)<0 ) continue;

    //���㱣��
  	var pv = eval("oldPremium"+ext+"["+i+"]"); //����

  	if( isNaN(parseFloat(pv)) ) //�����
  	{
      fm.all("Premium"+ext)[i].value = "";
  	  fm.all("Premium"+ext)[i].onchange();
  	  return ;
  	}
  	var dpv = 0;            //���ѱ仯��
  	if( edate.getTime()<pdate.getTime() )
  	{
  	  dpv = incTime(parseFloat(amountValue),
  	                parseFloat(rateValue)/1000,
  	                discountValue/100,
  	                shortRateValue);
  	}
  	else
  	{
  	  dpv = decTime(parseFloat(amountValue),
  	                parseFloat(rateValue)/1000,
  	                discountValue/100,
  	                vShortRate,
  	                vOverShortRate);
  	}
  	pv = parseFloat(pv) + dpv;
  	pv = pointTwo(mathRound(pv));
  	fm.all("Premium"+ext)[i].value= pv;
  	fm.all("Premium"+ext)[i].onchange();
  }
}

  /**
   * ��С��������λ��������
   * <p><b>Example: </b><p>
   * <p>mathRound(123.456) returns 123.46<p>
   * @param intValue ������ֵ
   * @return ��С��������λ����������������ֵ
   */
function mathRound( x )
{
  var v = Math.round( x * 100 ) ;
  v = v/100;
  return v;
}

  /**
   * �����ְ�0.00��ʽ��
   * <p><b>Example: </b><p>
   * <p>pointTwo(123.456) returns 123.45<p>
   * <p>pointTwo(123) returns 123.00<p>
   * @param intValue ������ֵ
   * @return ��0.00��ʽ�����������ֵ
   */
function pointTwo( s )
{
  var v = s.toString();
  var len = v.length;
  var index = v.indexOf(".");

  if( index==-1 )
  {
    v = v + ".00";
    return v;
  }
  else
  {
    if( len-index==3 )
    {
      return v;
    }
    else if( len-index==2 )
    {
      v = v +"0";
      return v;
    }
    else if( len-index==1 )
    {
      v = v + "00";
      return v;
    }
    else
    {
      return v.substring(0,index+3);
    }
  }
}

  /**
   * �����ְ�0.0000��ʽ��
   * <p><b>Example: </b><p>
   * <p>pointFour(123.456789) returns 123.4567<p>
   * <p>pointFour(123) returns 123.0000<p>
   * @param intValue ������ֵ
   * @return ��0.0000��ʽ�����������ֵ
   */
function pointFour( s )
{
	var v = Math.round( parseFloat(s) * 10000 )/10000;
  v = v.toString();

  //var v = s.toString();

  var len = v.length;
  var index = v.indexOf(".");

  if( index==-1 )
  {
    v = v + ".0000";
    return v;
  }
  else
  {
    if( len-index==5)
    {
      return v;
    }
    else if( len-index==4 )
    {
      v = v +"0";
      return v;
    }
    else if( len-index==3 )
    {
      v = v + "00";
      return v;
    }
    else if( len-index==2 )
    {
      v = v + "000";
      return v;
    }
    else if( len-index==1 )
    {
      v = v + "0000";
      return v;
    }
    else
    {
      return v.substring(0,index+5);
    }
  }
}

  /**
   * ����һ����ʽ�������ַ���
   * <p><b>Example: </b><p>
   * <p>dateToString("2002-10-4") returns "2002/10/4"<p>
   * @param date �����ͱ���
   * @return ��YYYY/MM/DD����ʽ�������ַ���
   */
function dateToString(d)
{
  return  d.getFullYear() +"/"+
          (d.getMonth()<9?("0"+(d.getMonth()+1)):(d.getMonth()+1) ) +"/"+
          (d.getDate()<10?("0"+d.getDate()):d.getDate() );
}

  /**
   * ��������е���һ��alert����ʾ������Ϣ
   * @param strErrMsg Ҫ��ʾ�Ĵ�����Ϣ�ַ���
   */
function errorMessage(strErrMsg)
{
	alert(strErrMsg);
}

  /**
   * ��ʾ��ӡ���ڣ���Ҫ��ͳһ��ӡ���ڵ���ʽ
   * <p><b>Example: </b><p>
   * <p>printWindow("../print.jsp", null)<p>
   * @param strURL �´��ڵ�����·����URL�������·��
   * @param strWindowName ָ��������������Ϊ��
   * @return �����½����ڵľ��
   */
function printWindow(strURL,strWindowName)
{
  var pageWidth=screen.availWidth-10;
  var pageHeight=screen.availHeight-30;
  if (pageWidth<100 )
  {
    pageWidth = 100;
  }
  if (pageHeight<100 )
  {
    pageHeight = 100;
  }

  var newWindow = window.open(strURL,strWindowName,'width='+pageWidth+',height='+pageHeight+',top=0,left=0,toolbar=0,location=0,directories=0,menubar=0,scrollbars=1.resizable=1,status=0');
  newWindow.focus();
  return newWindow;
}

  /**
   * ���������Ƿ������ڵ�У��(���ڸ�ʽxxxx/xx/xx)�������޸ģ���isDate�����ϲ�
   * <p><b>Example: </b><p>
   * <p>isDateI("2004/10/4") returns true<p>
   * <p>isDateI("2004-10-4") returns false<p>
   * @param date ��ʽ����Ϊ��YYYY/MM/DD���������ַ���
   * @return ����ֵ��true--�Ϸ�����, false--�Ƿ����ڣ�
   */
function isDateI(date)
{
  var strValue;
  strValue=date.split("/");

  if(strValue.length!=3) return false;
  if(!isInteger(strValue[0]) || !isInteger(strValue[1]) || !isInteger(strValue[2]) ) return false;

  var intYear=eval(strValue[0]);
  var intMonth=eval(strValue[1]);
  var intDay=eval(strValue[2]);

  if( intYear<0 || intYear>9999 || intMonth<0 || intMonth>12 || intDay<0 || intDay>31 ) return false;
  return true;
}
  /**
   * ���������Ƿ������ڵ�У��(���ڸ�ʽxxxxxxxx)�������޸ģ���isDate�����ϲ�
   * <p><b>Example: </b><p>
   * <p>isDateI("2004104") returns true<p>
   * <p>Other returns false<p>
   */
function isDateN(date)
{
	if(date.length > 8) return false;
  var strValue;
  strValue=new Array();
  strValue[0]=date.substring(0, 4);
  strValue[1]=date.substring(4, 6);
  strValue[2]=date.substring(6, 8);
  if(strValue.length!=3) return false;
  if(!isInteger(strValue[0]) || !isInteger(strValue[1]) || !isInteger(strValue[2]) ) return false;

  var intYear=eval(strValue[0]);
  var intMonth=eval(strValue[1]);
  var intDay=eval(strValue[2]);

  if( intYear<0 || intYear>9999 || intMonth<0 || intMonth>12 || intDay<0 || intDay>31 ) return false;
  return true;
}
  /**
   * �Ƚ����������ַ���(���ڸ�ʽxxxx/xx/xx)
   * <p><b>Example: </b><p>
   * <p>compareDateI("2002/10/03", "2002/10/03") returns 0<p>
   * <p>compareDateI("2002/10/03", "2001/10/03") returns 1<p>
   * @param date1 �����ַ���,��ʽ����Ϊ��yyyy/mm/dd��
   * @param date2 �����ַ���,��ʽ����Ϊ��yyyy/mm/dd��
   * @return date1=date2�򷵻�0 , date1>date2�򷵻�1 , date1<date2�򷵻�2
   */
function compareDateI(date1,date2)
{
  var strValue=date1.split("/");
  var date1Temp=new Date(strValue[0],strValue[1],strValue[2]);

  strValue=date2.split("/");
  var date2Temp=new Date(strValue[0],strValue[1],strValue[2]);

  if(date1Temp.getTime()==date2Temp.getTime())
    return 0;
  else if(date1Temp.getTime()>date2Temp.getTime())
    return 1;
  else
    return 2;
}

 /**
 *�õ���ǰ��ϵͳʱ�䣺
 *splitOp Ϊ�ָ����Example��
 *splitOp='-' �����ڸ�ʽΪ ��-��-��
 *splitOp='/' �����ڸ�ʽΪ ��/��/��
 *splitOp���Ϊ�գ���Ĭ���ǣ�'-'
 */
function getCurrentDate(splitOp)
{
   if(splitOp==null) splitOp='-';
   if(trim(splitOp)=='') splitOp='-';
   var SystemDate=new Date();
   var year=SystemDate.getYear();
   var month=SystemDate.getMonth()+1;
   var day=SystemDate.getDate();
   var CurrentDate=year+splitOp+month+splitOp+day;
   return CurrentDate;
}

  /**
   * ���������Ƿ��������ѯ��ʽ�����ڵ�У��(���ڸ�ʽxxxx/xx/xx)
   * <p><b>Example: </b><p>
   * <p>isQueryDate(":", "2002/10/03:2002/10/04") returns true<p>
   * <p>isQueryDate("", "2001/10/03") returns true<p>
   * @param sign ��������͵�һ���ڵ��жϱ�־,���������ڲ������
   * @param date �����������ݵ��ַ���
   * @return ����ֵ��true--�Ϸ�����, false--�Ƿ����ڣ�
   */
function isQueryDate(sign,date)
{
  var strValue;

  //������ж�
  if (sign==":")
  {
  	strValue=date.split(":");
  	if (strValue.length!=2) return false;
  	if (!isDateI(strValue[0])) return false;
  	if (!isDateI(strValue[1])) return false;
  	if (compareDateI(strValue[0],strValue[1])==1) return false;
	}
	//��һ���ڵ��ж�
	else
	{
		return isDateI(date);
	}
  return true;
}

  /**
   * ���������Ƿ��������ѯ��ʽ��������У��integer
   * <p><b>Example: </b><p>
   * <p>isQueryInteger(":", "2002.12:2003.34") returns true<p>
   * <p>isQueryInteger("", "2001.567") returns true<p>
   * @param sign ��������͵�һ�������жϱ�־
   * @param integer �����������ݵ��ַ����������������������
   * @return ����ֵ��true--�Ϸ�������ʽ, false--�Ƿ�������ʽ��
   */
function isQueryInteger(sign,integer)
{
  var strValue;

  //������ж�
  if (sign==":")
  {
  	strValue=integer.split(":");
  	if (strValue.length!=2) return false;
  	if (!isInteger(strValue[0])) return false;
  	if (!isInteger(strValue[1])) return false;
  	if (strValue[0]>strValue[1]) return false;
	}
	//��һ���ڵ��ж�
	else
	{
		return isInteger(integer);
	}
  return true;
}

  /**
   * ���������Ƿ��������ѯ��ʽ�����ֵ�У��
   * <p><b>Example: </b><p>
   * <p>isQueryNum(":", "2002:2003") returns true<p>
   * <p>isQueryNum("", "2001") returns true<p>
   * @param sign ��������͵�һ���ֵ��жϱ�־
   * @param num �����������ݵ��ַ��������������ֲ������
   * @return ����ֵ��true--�Ϸ����ָ�ʽ, false--�Ƿ����ָ�ʽ��
   */
function isQueryNum(sign,num)
{
  var strValue;

  //������ж�
  if (sign==":")
  {
  	strValue=num.split(":");
  	if (strValue.length!=2) return false;
  	if (!isNumeric(strValue[0])) return false;
  	if (!isNumeric(strValue[1])) return false;
  	if (strValue[0]<strValue[1]) return false;
	}
	//��һ���ڵ��ж�
	else
	{
		return isNumeric(num);
	}
  return true;
}

  /**
   * ��ͼƬ����ʾ������
   * @param imgID HTML�п���ʾͼƬ�Ķ����ID
   * @param stl ������ʾ�����صı�־������Ϊ��ʾ����none��Ϊ����
   */
function showImg(imgID,stl)
{
  document.all(imgID).style.display = stl;
}

  /**
   * ����***���븳ֵ --����ά��ģ��ר��onblur=setNewCode(this)
   * @param field HTMLҳ��Ķ�������
   */
function setNewCode(field)
{
  if( trim(fm.all("new"+field.name).value)=="" )
  {
    fm.all("new"+field.name).value = field.value;
  }
}

//�ظ���������������������
//���������Ƿ������ڵ�У��
function isCodeDate(date)
{
  var strValue;
  strValue=date.split("/");

  if(strValue.length!=3) return false;
  if(!isInteger(strValue[0]) || !isInteger(strValue[1]) || !isInteger(strValue[2]) ) return false;

  var intYear=eval(strValue[0]);
  var intMonth=eval(strValue[1]);
  var intDay=eval(strValue[2]);

  if( intYear<0 || intYear>9999 || intMonth<0 || intMonth>12 || intDay<0 || intDay>31 ) return false;
  return true;
}

  /**
   * ��ȡ�ַ����Ĳ����Ӵ����ú����õ�c_Str�еĵ�c_i����c_Split�ָ���ַ���
   * <p><b>Example: </b><p>
   * <p>getStr("Minim|Hzm|Yt|", "2", "|") returns "Hzm"<p>
   * @param c_Str �зָ�������ַ���
   * @param c_i ȡ�ڼ����ָ��Ӵ�
   * @param c_Split �ָ���
   * @return ���ص�c_i���ָ��Ӵ�
   */
function getStr(c_Str , c_i ,c_Split)
{
  var t_Str1, t_Str2 , t_strOld;
  var i, i_Start, j_End;
  t_Str1 = c_Str;
  t_Str2 = c_Split;
  i = 0;
	try
	{
    while (i < c_i)
    {
      i_Start = t_Str1.indexOf(t_Str2,0);
      if (i_Start >= 0)
      {
        i = i + 1;
        t_strOld = t_Str1;
        t_Str1 = t_Str1.substring(i_Start+t_Str2.length,t_Str1.length);
      }
      else
      {
        if (i != c_i - 1)
        {
          t_Str1="";
        }
        break;
      }
    }

    if (i_Start >= 0)
      t_Str1=t_strOld.substring(0,i_Start);
  }
  catch(ex)
  {
    t_Str1="";
  }
  return t_Str1;
}

  /**
   * ���ַ���������Ϊһ�����飬���ַ�����ͷ���з�����Ϣ
   * <p><b>Example: δ���ԣ���ȷ�����ӵ���ȷ��</b><p>
   * <p>decodeString("Minim|1^Hzm|2^Yt|3") returns "3��Minim,1,Hzm,2,Yt,3"<p>
   * @param strValue ��Ҫ�������ַ���,ͨ���ǲ�ѯ���ݿⷵ�صĽ���ַ���
   * @return ���ִ�гɹ����򷵻��Լ�¼Ϊ�У��ֶ�Ϊ�еĶ�Ψ���飬���ִ�в��ɹ����򷵻�false
   */
function decodeString(strValue)
{
	var i,i1,j,j1;
  var strValue;                         //��ŷ������˷��صĴ�������
  var arrField;
  var arrRecord;
  var arrCode = new Array();             //��ų�ʼ������ʱ��
  var t_Str;

  try
  {
    arrRecord = strValue.split(RECORDDELIMITER);  //����ַ������γɷ��ص�����

    t_Str     = getStr(arrRecord[0],1,FIELDDELIMITER);

    if (t_Str!="0")                                     //�����Ϊ0��ʾ��������ִ�з�������
    {
      return false;
    }

    i1=arrRecord.length;
    for (i=1;i<i1;i++)
    {
      arrField  = arrRecord[i].split(FIELDDELIMITER); //����ַ���,��ÿ����¼���Ϊһ������
      j1=arrField.length;
      arrCode[i-1] = new Array();
      for (j=0;j<j1;j++)
      {
        arrCode[i-1][j] = arrField[j];
      }
    }
  }
  catch(ex)
  {
    return false;
  }
  return arrCode;
}

  /**
   * ���ַ���������Ϊһ�����飬���ַ�����ͷ��û���з�����Ϣ
   * <p><b>Example: δ���ԣ���ȷ�����ӵ���ȷ��</b><p>
   * <p>decodeStringNoHead("Minim|1^Hzm|2^Yt|3") returns "Minim,1,Hzm,2,Yt,3"<p>
   * @param strValue ��Ҫ�������ַ���,ͨ���ǲ�ѯ���ݿⷵ�صĽ���ַ���
   * @return ���ִ�гɹ����򷵻��Լ�¼Ϊ�У��ֶ�Ϊ�еĶ�Ψ���飬���ִ�в��ɹ����򷵻�false
   */
function decodeStringNoHead(strValue)
{
	var i,i1,j,j1;
  var strValue;                         //��ŷ������˷��صĴ�������
  var arrField;
  var arrRecord;
  var arrCode = new Array();             //��ų�ʼ������ʱ��
  var t_Str;
  if(strValue==null || strValue=="")
    return false;

  try
  {
    arrRecord = strValue.split(RECORDDELIMITER);  //����ַ������γɷ��ص�����
    i1=arrRecord.length;
    for (i=0;i<i1;i++)
    {
      arrField  = arrRecord[i].split(FIELDDELIMITER); //����ַ���,��ÿ����¼���Ϊһ������
      j1=arrField.length;
      arrCode[i] = new Array();
      for (j=0;j<j1;j++)
      {
        arrCode[i][j] = arrField[j];
      }
    }
  }
  catch(ex)
  {
    return false;
  }
  return arrCode;
}

  /**
   * �жϺ������ͣ�����˱����ţ����屣����
   * �ڡ���Ŀ�淶_Լ�����ġ��¾ɺ������.xls���й涨�������[12,13]λ��Ϊ�������ͱ�־;
   * <p><b>Example: </b><p>
   * <p>getCodeType("abcdefghijk11asdfasdf") returns "11"<p>
   * @param strCode �������ַ���
   * @return �����ַ���
   */
function getCodeType( strCode ) {
    if ( (strCode == null) || (strCode == "") ) {
      return "00";
    } else {
    //�ڡ���Ŀ�淶_Լ�����ġ��¾ɺ������.xls���й涨�������[12,13]λ��Ϊ�������ͱ�־
      return strCode.substring(11, 13);
    };
}

  /**
   * �ж���������а��������ͺ����ָ�����ͺ����Ƿ�һ��
   * �ڡ���Ŀ�淶_Լ�����ġ��¾ɺ������.xls���й涨�������[12,13]λ��Ϊ�������ͱ�־;
   * <p><b>Example: </b><p>
   * <p>judgeCodeType("abcdefghijk11asdfasdf", "11") returns ture<p>
   * @param strCode �������ַ���
   * @param strType ���ͺ��룬���ա��¾ɺ������.xls��
   * @return ����ֵ��true--һ��, false--��һ�£�
   */
function judgeCodeType( strCode, strType ) {
    if ( (strCode == null) || (strCode == "") || (strType == null) || (strType == "") ) {
      return false;
    } else {
      return (getCodeType(strCode).compareTo(strType) == 0);
    };
}

  /**
   * ��ս����ϵ�����������
   * <p><b>Example: </b><p>
   * <p>EmptyFormElements()<p>
   */
function emptyFormElements() {
  var formsNum = 0;          //�����е�FORM��
  var elementsNum = 0;       //FORM�е�Ԫ����

  //��������FORM
  for (formsNum=0; formsNum<window.document.forms.length; formsNum++) {
    //����FORM�е�����ELEMENT
    for (elementsNum=0; elementsNum<window.document.forms[formsNum].elements.length; elementsNum++) {
  	  if (window.document.forms[formsNum].elements[elementsNum].type == "text") {
  	    window.document.forms[formsNum].elements[elementsNum].value = "";
  	  }
  	}
  }
}

  /**
   * �������ϵ�������������Ϊ"undefined"���
   * <p><b>Example: </b><p>
   * <p>EmptyFormElements()<p>
   */
function emptyUndefined() {
  var formsNum = 0;          //�����е�FORM��
  var elementsNum = 0;       //FORM�е�Ԫ����

  //��������FORM
  for (formsNum=0; formsNum<window.document.forms.length; formsNum++) {
    //����FORM�е�����ELEMENT
    for (elementsNum=0; elementsNum<window.document.forms[formsNum].elements.length; elementsNum++) {
  	  if ((window.document.forms[formsNum].elements[elementsNum].value == "undefined"
  	      || window.document.forms[formsNum].elements[elementsNum].value == "null")
  	      &&
  	      (window.document.forms[formsNum].elements[elementsNum].type == "text"
  	      || window.document.forms[formsNum].elements[elementsNum].type == "textarea")) {
  	    window.document.forms[formsNum].elements[elementsNum].value = "";
  	  }
  	}
  }
}


/**
 * ʹ��һά�����д�ŵ����������˶�ά����
 * <p><b>Example: </b><p>
 * <p>chooseArray({{1��2}��{3��4}}, {0}) returns {{1}��{3}}<p>
 * @param dataArray ������ݵĶ�ά����
 * @param filterArray �����������һά����
 * @return ��һά�����е��������˹��Ķ�ά����
 */
function chooseArray(dataArray, filterArray) {
  var arrResult = new Array();
  var recordNum, filterNum;

  try {
    for (recordNum=0; recordNum<dataArray.length; recordNum++) {
      arrResult[recordNum] = new Array();

      for (filterNum=0; filterNum<filterArray.length; filterNum++) {
        arrResult[recordNum].push(dataArray[recordNum][filterArray[filterNum]]);
      }
    }
  } catch(ex) {
    alert("chooseArray������ִ���");
  }

  return arrResult;
}

/**
 * ��js�ļ��е��ַ�ת���������ַ�
 */
function Conversion(strIn) {
	//alert("342432"+strIn);
  var strOut;
	strOut=replace(strIn,"@@Enter","\r\n");
  strIn=strOut;
  //strOut=replace(strIn,"@@NewLine","\n");
  //strIn=strOut;
  strOut=replace(strIn,"@@DouQuot","\"");
  strIn=strOut;
  strOut=replace(strIn,"@@SinQuot","\'");
	//strOut=replace(strIn,"@@Delimiter","^");
	//alert(strOut);
  return strOut;
}

/**
 * ���ݴ���ѡ��Ĵ�����Ҳ���ʾ����
 */
/*
function showCodeName1() {
  var formsNum = 0;          //�����е�FORM��
  var elementsNum = 0;       //FORM�е�Ԫ����
  var strEvent = "";         //����onDoubleClick�¼�����
  var urlStr = "";
  var sFeatures = "";
  var strCode = "";          //����ѡ��
  var strQueryResult = "";   //����ѡ��Ĳ�ѯ�����
  var arrCode = null;        //�������
  var strCodeValue = "";     //����ֵ
  var cacheFlag = false;     //�ڴ��������ݱ�־

  var strCodeSelect = "";

  //Ѱ��������
  var win = searchMainWindow(this);
  if (win == false) { win = this; }

  //��������FORM
  for (formsNum=0; formsNum<window.document.forms.length; formsNum++) {
    //����FORM�е�����ELEMENT
    for (elementsNum=0; elementsNum<window.document.forms[formsNum].elements.length; elementsNum++) {
      //Ѱ�Ҵ���ѡ��Ԫ��
      if ((window.document.forms[formsNum].elements[elementsNum].className == "code") ||
      	  (window.document.forms[formsNum].elements[elementsNum].className == "code8") ||
      	  (window.document.forms[formsNum].elements[elementsNum].className == "readonly")) {
        //alert(window.document.forms[formsNum].elements[elementsNum].type);
        //return;
        //ȡ������ֵ
        strCodeValue = window.document.forms[formsNum].elements[elementsNum].value;

        //��ֵ�򲻴���
        if (strCodeValue == "") continue;

        //��������Դ����
        if (window.document.forms[formsNum].elements[elementsNum].CodeData != null) {
          strQueryResult = window.document.forms[formsNum].elements[elementsNum].CodeData;
        }
        //�Ӻ�̨ȡ����
        else {
          //ȡ��CODESELECT����
          strEvent = window.document.forms[formsNum].elements[elementsNum].ondblclick;
          strCode = new String(strEvent);
          strCode = strCode.substring(strCode.indexOf("showCodeList") + 14);
          strCode = strCode.substring(0, strCode.indexOf("'"));
          //alert(strCode);

          //��������������ݣ���������ȡ����
          if (win.parent.VD.gVCode.getVar(strCode) != false) {
            arrCode = win.parent.VD.gVCode.getVar(strCode);
            cacheFlag = true;
          }
          else {
           if(strCode=="AgentCode"||strCode=="OccupationCode9"){
          		//���ڴ��������ݺ�ְҵ������ݵ��������ϴ�������������ѯʱ������Ӱ�캺����ʾ�ٶ�
          		//�ض����ǵĺ�����ѯ�����˵�������������������ѯ����������ٻ��棩
            	 urlStr = "../common/jsp/CodeQueryWindow.jsp?codeType=" + strCode+"&codeField="+strCode+"&codeConditon="+strCodeValue;
    	    }
    	    else
    	         urlStr = "../common/jsp/CodeQueryWindow.jsp?codeType=" + strCode;
    	   sFeatures = "status:no;help:0;close:0;dialogWidth:10px;dialogHeight:0px;dialogLeft:-1;dialogTop:-1;resizable=1";

            //�������ݿ����CODE��ѯ�����ز�ѯ�����strQueryResult
      	    strQueryResult = window.showModalDialog(urlStr, "", sFeatures);
    	    }
  	      }

  	    //��ֳ�����
  	    try {
  	      if (!cacheFlag) {
  	        arrCode = decodeEasyQueryResult(strQueryResult);

  	        strCodeSelect = "";
  	        var arr2 = new Array();
            for (i=0; i<arrCode.length; i++) {
              if (i%100==0) {
                arr2.push(strCodeSelect);
                strCodeSelect = "";
              }

              strCodeSelect = strCodeSelect + "<option value=" + arrCode[i][0] + ">"
                            + arrCode[i][0] + "-" + arrCode[i][1] + "</option>";
            }
            arr2.push(strCodeSelect);


            strCodeSelect = "";
            for (i=0; i<arr2.length; i++) {
              strCodeSelect =  strCodeSelect + arr2[i];
            }

//  	        for (i=0; i<arrCode.length; i++) {
//  	          strCodeSelect = strCodeSelect + "<option value=" + arrCode[i][0] + ">";
//              strCodeSelect = strCodeSelect + arrCode[i][0] + "-" + arrCode[i][1];
//              strCodeSelect = strCodeSelect + "</option>";
//  	        }

  	        if(strCode=="AgentCode" ||strCode=="OccupationType9"){
  	        	//���ڴ��������ݺ�ְҵ������ݵ��������ϴ�������������ѯʱ������Ӱ�캺����ʾ�ٶ�
          		//�ض����ǵĺ�����ѯ�����˵�������������������ѯ����������ٻ��棩
  	        }else{
  	         //����ֺõ����ݷŵ��ڴ���
  	        win.parent.VD.gVCode.addArrVar(strCode, "", arrCode);
  	        //�����Ƿ������ݴӷ������˵õ�,�����øñ���
  	        win.parent.VD.gVCode.addVar(strCode+"Select","",strCodeSelect);
  	      ��}
  	      }
  	      cacheFlag = false;

    	    for (i=0; i<arrCode.length; i++) {
  	  	    if (strCodeValue == arrCode[i][0]) {
  	  	   	  //window.document.forms[formsNum].elements[elementsNum].value = arrCode[i][0] + "-" + arrCode[i][1];
  	  	   	  window.document.forms[formsNum].elements[elementsNum].value = arrCode[i][1];
  	  	  	  break;
  	  	    }
          }

        }
  	    catch(ex)
  	    {}
  	    //alert(arrCode);

  	    //alert(window.document.forms[formsNum].elements[elementsNum].type == "text");
        //return;
      }

      //��ʾtitle
      if (window.document.forms[formsNum].elements[elementsNum].type == "text") {
         window.document.forms[formsNum].elements[elementsNum].title = window.document.forms[formsNum].elements[elementsNum].value;
      }

    }
  }
}
*/

/**
 * ���ݴ���ѡ��Ĵ�����Ҳ���ʾ����
 */
function showCodeName() {
	var formsNum = 0;          //�����е�FORM��
	var elementsNum = 0;       //FORM�е�Ԫ����
	var strEvent = "";         //����onDoubleClick�¼�����
	var urlStr = "";
	var sFeatures = "";
	var strCode = "";          //����ѡ��
	var strQueryResult = "";   //����ѡ��Ĳ�ѯ�����
	var arrCode = null;        //�������
	var strCodeValue = "";     //����ֵ
	var cacheFlag = false;     //�ڴ��������ݱ�־

  	var strCodeSelect = "";

	//Ѱ��������
	var win = searchMainWindow(this);
	if (win == false) { win = this; }

	//��������FORM
	for (formsNum=0; formsNum < window.document.forms.length; formsNum++)
	{
		//����FORM�е�����ELEMENT
		for (elementsNum=0; elementsNum < window.document.forms[formsNum].elements.length; elementsNum++)
		{
			//Ѱ�Ҵ���ѡ��Ԫ��
			if ((window.document.forms[formsNum].elements[elementsNum].className == "code")||
			    (window.document.forms[formsNum].elements[elementsNum].className == "readonly")||
			    (window.document.forms[formsNum].elements[elementsNum].className == "code8"))
			{
				//ȡ������ֵ
			    strCodeValue = window.document.forms[formsNum].elements[elementsNum].value;

			    //��ֵ�򲻴���
			    if (strCodeValue == "") continue;

			    //��������Դ����
			    if (window.document.forms[formsNum].elements[elementsNum].CodeData != null)
			    {
					strQueryResult = window.document.forms[formsNum].elements[elementsNum].CodeData;
			    }
			    //�Ӻ�̨ȡ����
			    else
			    {
					//ȡ��CODESELECT����
					strEvent = window.document.forms[formsNum].elements[elementsNum].ondblclick;
					strCode = new String(strEvent);
					strCode = strCode.substring(strCode.indexOf("showCodeList") + 14);
					strCode = strCode.substring(0, strCode.indexOf("'"));
					//alert(strCode);

					//��������������ݣ���������ȡ����
					if (win.parent.VD.gVCode.getVar(strCode) != false)
					{
						arrCode = win.parent.VD.gVCode.getVar(strCode);
						cacheFlag = true;
					}
      				else
      				{
						if (strCode=="AgentCode"||strCode=="OccupationCode9")
						{
							//���ڴ��������ݺ�ְҵ������ݵ��������ϴ�������������ѯʱ������Ӱ�캺����ʾ�ٶ�
							//�ض����ǵĺ�����ѯ�����˵�������������������ѯ����������ٻ��棩
							 urlStr = "../common/jsp/CodeQueryWindow.jsp?codeType=" + strCode+"&codeField="+strCode+"&codeConditon="+strCodeValue;
						}
						else
							urlStr = "../common/jsp/CodeQueryWindow.jsp?codeType=" + strCode;

						sFeatures = "status:no;help:0;close:0;dialogWidth:10px;dialogHeight:0px;dialogLeft:-1;dialogTop:-1;resizable=1";

				        //�������ݿ����CODE��ѯ�����ز�ѯ�����strQueryResult
				  	    strQueryResult = window.showModalDialog(urlStr, "", sFeatures);
	    			}
    			}

				//��ֳ�����
				try
				{
					if (!cacheFlag)
					{
						arrCode = decodeEasyQueryResult(strQueryResult);

						strCodeSelect = "";
						var arr2 = new Array();
						for (i=0; i<arrCode.length; i++)
						{
							if (i%100 == 0)
							{
								arr2.push(strCodeSelect);
								strCodeSelect = "";
							}

							strCodeSelect = strCodeSelect + "<option value=" + arrCode[i][0] + ">"
							            + arrCode[i][0] + "-" + arrCode[i][1] + "</option>";
						}
						arr2.push(strCodeSelect);

						strCodeSelect = "";
						for (i=0; i<arr2.length; i++)
						{
							strCodeSelect =  strCodeSelect + arr2[i];
						}

						if(strCode=="AgentCode" ||strCode=="OccupationType9")
						{
							//���ڴ��������ݺ�ְҵ������ݵ��������ϴ�������������ѯʱ������Ӱ�캺����ʾ�ٶ�
							//�ض����ǵĺ�����ѯ�����˵�������������������ѯ����������ٻ��棩
						}
						else
						{
							 //����ֺõ����ݷŵ��ڴ���
							win.parent.VD.gVCode.addArrVar(strCode, "", arrCode);
							//�����Ƿ������ݴӷ������˵õ�,�����øñ���
							win.parent.VD.gVCode.addVar(strCode+"Select","",strCodeSelect);
						}
					}
					cacheFlag = false;

					for (i=0; i<arrCode.length; i++)
					{
						if (strCodeValue == arrCode[i][0])
						{
							window.document.forms[formsNum].elements[elementsNum].value = arrCode[i][1];
							//arrCode[i][0]
							break;
						}
					}
				}
				catch(ex)
				{}
  			}

			//��ʾtitle
			if (window.document.forms[formsNum].elements[elementsNum].type == "text")
			{
				window.document.forms[formsNum].elements[elementsNum].title = window.document.forms[formsNum].elements[elementsNum].value;
			}
		}
	}
}

/**
 *���ڴ��뷴�ԣ�Ϊ�������е�showcodename��ͻ��
 *���һ���µĺ���
 *Yangming
 *
 */
function showAllCodeName()
{
	var formsNum = 0;          //�����е�FORM��
	var elementsNum = 0;       //FORM�е�Ԫ����
	var strEvent = "";         //����onDoubleClick�¼�����
	var urlStr = "";
	var sFeatures = "";
	var strCode = "";          //����ѡ��
	var strQueryResult = "";   //����ѡ��Ĳ�ѯ�����
	var arrCode = null;        //�������
	var strCodeValue = "";     //����ֵ
	var cacheFlag = false;     //�ڴ��������ݱ�־

  	var strCodeSelect = "";

	//Ѱ��������
	var win = searchMainWindow(this);
	if (win == false) { win = this; }

	//��������FORM
	for (formsNum=0; formsNum < window.document.forms.length; formsNum++)
	{
		//����FORM�е�����ELEMENT
		for (elementsNum=0; elementsNum < window.document.forms[formsNum].elements.length; elementsNum++)
		{
			//Ѱ�Ҵ���ѡ��Ԫ��
			if (//(window.document.forms[formsNum].elements[elementsNum].className == "code")||
			    //(window.document.forms[formsNum].elements[elementsNum].className == "readonly") ||
			    (window.document.forms[formsNum].elements[elementsNum].className == "codeno")||
			    (window.document.forms[formsNum].elements[elementsNum].className == "codeNo"))
			{
				//ȡ������ֵ
			    strCodeValue = window.document.forms[formsNum].elements[elementsNum].value;
			    //��ֵ�򲻴���
			    if (strCodeValue == "") continue;

			    //��������Դ����
			    if (window.document.forms[formsNum].elements[elementsNum].CodeData != null)
			    {
					strQueryResult = window.document.forms[formsNum].elements[elementsNum].CodeData;
			    }
			    //�Ӻ�̨ȡ����
			    else
			    {
					//ȡ��CODESELECT����
					strEvent = window.document.forms[formsNum].elements[elementsNum].ondblclick;
					strCode = new String(strEvent);
					strCode = strCode.substring(strCode.indexOf("showCodeList") + 14);
					strCode = strCode.substring(0, strCode.indexOf("'"));

					//��������������ݣ���������ȡ����
					if (win.parent.VD.gVCode.getVar(strCode) != false)
					{
						arrCode = win.parent.VD.gVCode.getVar(strCode);
						cacheFlag = true;
					}
      				else
      				{
						if (strCode=="AgentCode"||strCode=="OccupationCode9")
						{
							//���ڴ��������ݺ�ְҵ������ݵ��������ϴ�������������ѯʱ������Ӱ�캺����ʾ�ٶ�
							//�ض����ǵĺ�����ѯ�����˵�������������������ѯ����������ٻ��棩
							 urlStr = "../common/jsp/CodeQueryWindow.jsp?codeType=" + strCode+"&codeField="+strCode+"&codeConditon="+strCodeValue;
						}
						else
							urlStr = "../common/jsp/CodeQueryWindow.jsp?codeType=" + strCode;

						sFeatures = "status:no;help:0;close:0;dialogWidth:10px;dialogHeight:0px;dialogLeft:-1;dialogTop:-1;resizable=1";

				        //�������ݿ����CODE��ѯ�����ز�ѯ�����strQueryResult
				  	    strQueryResult = window.showModalDialog(urlStr, "", sFeatures);

	    			}
    			}

				//��ֳ�����
				try
				{
					if (!cacheFlag)
					{
						arrCode = decodeEasyQueryResult(strQueryResult);
						strCodeSelect = "";
						var arr2 = new Array();
						for (i=0; i<arrCode.length; i++)
						{
							if (i%100 == 0)
							{
								arr2.push(strCodeSelect);
								strCodeSelect = "";
							}
							strCodeSelect = strCodeSelect + "<option value=" + arrCode[i][0] + ">"
							            + arrCode[i][0] + "-" + arrCode[i][1] + "</option>";

						}
						arr2.push(strCodeSelect);
						strCodeSelect = "";
						for (i=0; i<arr2.length; i++)
						{
							strCodeSelect =  strCodeSelect + arr2[i];
						}

						if(strCode=="AgentCode" ||strCode=="OccupationType9")
						{
							//���ڴ��������ݺ�ְҵ������ݵ��������ϴ�������������ѯʱ������Ӱ�캺����ʾ�ٶ�
							//�ض����ǵĺ�����ѯ�����˵�������������������ѯ����������ٻ��棩
						}
						else
						{
							 //����ֺõ����ݷŵ��ڴ���
							win.parent.VD.gVCode.addArrVar(strCode, "", arrCode);
							//�����Ƿ������ݴӷ������˵õ�,�����øñ���
							win.parent.VD.gVCode.addVar(strCode+"Select","",strCodeSelect);
						}
					}
					cacheFlag = false;

					for (i=0; i<arrCode.length; i++)
					{
						if (strCodeValue == arrCode[i][0])
						{
							window.document.forms[formsNum].elements[elementsNum+1].value = arrCode[i][1];
							break;
						}
					}
				}
				catch(ex)
				{}
  			}

			//��ʾtitle
			if (window.document.forms[formsNum].elements[elementsNum].type == "text")
			{
				window.document.forms[formsNum].elements[elementsNum].title = window.document.forms[formsNum].elements[elementsNum].value;
			}
		}
	}
}
/**
 * ���ݴ���ѡ��Ĵ�����Ҳ���ʾ���ƣ���ʾָ����һ��
 * strCode - ����ѡ��Ĵ���
 * showObjName - Ҫ��ʾ�Ľ������
 */
function showOneCodeName(strCode, showObjName) {
  var formsNum = 0;          //�����е�FORM��
  var elementsNum = 0;       //FORM�е�Ԫ����
  var urlStr = "";
  var sFeatures = "";
  var strQueryResult = "";   //����ѡ��Ĳ�ѯ�����
  var arrCode = null;        //�������
  var strCodeValue = "";     //����ֵ
  var cacheFlag = false;     //�ڴ��������ݱ�־
  var showObj;

  //alert(strCode);
  if (showObjName == null) showObjName = strCode;

  //��������FORM
  for (formsNum=0; formsNum<window.document.forms.length; formsNum++) {
    //����FORM�е�����ELEMENT
    for (elementsNum=0; elementsNum<window.document.forms[formsNum].elements.length; elementsNum++) {
      //Ѱ�Ҵ���ѡ��Ԫ��
      //alert(window.document.forms[formsNum].elements[elementsNum].name);
      if (window.document.forms[formsNum].elements[elementsNum].name == showObjName) {
	   	  showObj = window.document.forms[formsNum].elements[elementsNum];
	  	  break;
	  	}
	  }
	}

  //Ѱ��������
  var win = searchMainWindow(this);
  if (win == false) { win = this; }

  //��������������ݣ���������ȡ����
  if (win.parent.VD.gVCode.getVar(strCode) != false) {
    arrCode = win.parent.VD.gVCode.getVar(strCode);
    cacheFlag = true;
  }
  else {
    urlStr = "../common/jsp/CodeQueryWindow.jsp?codeType=" + strCode;
    sFeatures = "status:no;help:0;close:0;dialogWidth:150px;dialogHeight:0px;dialogLeft:-1;dialogTop:-1;resizable=1";

    //�������ݿ����CODE��ѯ�����ز�ѯ�����strQueryResult
    strQueryResult = window.showModalDialog(urlStr, "", sFeatures);
  }

  //��ֳ�����
  try {
    if (!cacheFlag) {
      arrCode = decodeEasyQueryResult(strQueryResult);

      strCodeSelect = "";
      for (i=0; i<arrCode.length; i++) {
        strCodeSelect = strCodeSelect + "<option value=" + arrCode[i][0] + ">";
        strCodeSelect = strCodeSelect + arrCode[i][0] + "-" + arrCode[i][1];
        strCodeSelect = strCodeSelect + "</option>";
      }

      //����ֺõ����ݷŵ��ڴ���
      win.parent.VD.gVCode.addArrVar(strCode, "", arrCode);
      //�����Ƿ������ݴӷ������˵õ�,�����øñ���
      win.parent.VD.gVCode.addVar(strCode+"Select","",strCodeSelect);
    }
    cacheFlag = false;

    for (i=0; i<arrCode.length; i++) {
	    if (showObj.value == arrCode[i][0]) {
      //showObj.value = arrCode[i][0] + "-" + arrCode[i][1];
      	showObj.value = arrCode[i][1];
	    }
    }

  }
  catch(ex)
  {}
  //alert(arrCode);
}
/**
* ���ݴ���ѡ��Ĵ�����Ҳ���ʾ���ƣ���ʾָ����һ��
* strCode - ����ѡ��Ĵ���
* showObjCode - �����ŵĽ������
* showObjName - Ҫ��ʾ���ƵĽ������
*/
function showOneCodeName1(strCode, showObjCode, showObjName) {
	var formsNum = 0;	//�����е�FORM��
	var elementsNum = 0;	//FORM�е�Ԫ����
	var urlStr = "";
	var sFeatures = "";
	var strQueryResult = "";	//����ѡ��Ĳ�ѯ�����
	var arrCode = null;	//�������
	var strCodeValue = "";	//����ֵ
	var cacheFlag = false;	//�ڴ��������ݱ�־
	var showObjn;
	var showObjc;
	if (showObjName == null) showObjName = strCode;
	//��������FORM
	for (formsNum=0; formsNum<window.document.forms.length; formsNum++)

	{
		//����FORM�е�����ELEMENT
		for (elementsNum=0; elementsNum<window.document.forms[formsNum].elements.length; elementsNum++)

		{
			//Ѱ�Ҵ���ѡ��Ԫ��
			//alert(window.document.forms[formsNum].elements[elementsNum].name);
			if (window.document.forms[formsNum].elements[elementsNum].name == showObjCode)
			{
				showObjc = window.document.forms[formsNum].elements[elementsNum];
			}
			if (window.document.forms[formsNum].elements[elementsNum].name == showObjName)
			{
				showObjn = window.document.forms[formsNum].elements[elementsNum];
				break;
			}
		}
	}
	//��������������ݲ�Ϊ�գ��Ų�ѯ���������κβ���
	if (showObjc.value != "")
	{
		//Ѱ��������
		var win = searchMainWindow(this);
		if (win == false) { win = this; }



		//��������������ݣ���������ȡ����
		if (win.parent.VD.gVCode.getVar(strCode))
		{
			arrCode = win.parent.VD.gVCode.getVar(strCode);
			cacheFlag = true;
		}
		else
		{
			urlStr = "../common/jsp/CodeQueryWindow.jsp?codeType=" + strCode;
			sFeatures = "status:no;help:0;close:0;dialogWidth:150px;dialogHeight:0px;resizable=1";
			            //+ "dialogLeft:-1;dialogTop:-1;";
			//�������ݿ����CODE��ѯ�����ز�ѯ�����strQueryResult
			//strQueryResult = window.showModalDialog(urlStr, "", sFeatures);
		    Request = new ActiveXObject("Microsoft.XMLHTTP");
	        Request.open("POST",urlStr, false);
	        Request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	        Request.send(null);
	//      Request.open("GET", strURL, false);
	//      Request.send(null);
	        try
	        {
	            strQueryResult = Request.responseText;
	            if (strQueryResult != null && typeof(strQueryResult) == "string")
	            {
	                strQueryResult = strQueryResult.trim();
	            }
	        }
	        catch (ex)
	        {
	            //alert("���ݷ��س���" + ex.message);
	        }
		}
		//��ֳ�����
		try {
			if (!cacheFlag)

			{
				try
				{
					arrCode = decodeEasyQueryResult(strQueryResult);
				}
				catch(ex)
				{
					alert("ҳ��ȱ������EasyQueryVer3.js");
				}
				strCodeSelect = "";
				for (i=0; i<arrCode.length; i++)
				{
					strCodeSelect = strCodeSelect + "<option value=" + arrCode[i][0] + ">";
					strCodeSelect = strCodeSelect + arrCode[i][0] + "-" + arrCode[i][1];
					strCodeSelect = strCodeSelect + "</option>";
				}
				//����ֺõ����ݷŵ��ڴ���
				win.parent.VD.gVCode.addArrVar(strCode, "", arrCode);
				//�����Ƿ������ݴӷ������˵õ�,�����øñ���
				win.parent.VD.gVCode.addVar(strCode+"Select","",strCodeSelect);
			}
			cacheFlag = false;
			for (i=0; i<arrCode.length; i++)
			{
				if (showObjc.value == arrCode[i][0])
				{
					showObjn.value = arrCode[i][1];
					break;
				}
			}
		}
		catch(ex)
		{}
	}
}



function showOneCodeNametoAfter(strCode, showObjName) {
  var formsNum = 0;          //�����е�FORM��
  var elementsNum = 0;       //FORM�е�Ԫ����
  var urlStr = "";
  var sFeatures = "";
  var strQueryResult = "";   //����ѡ��Ĳ�ѯ�����
  var arrCode = null;        //�������
  var strCodeValue = "";     //����ֵ
  var cacheFlag = false;     //�ڴ��������ݱ�־
  var showObj;
   var showName;

  //alert(strCode);
  if (showObjName == null) showObjName = strCode;

  //��������FORM
  for (formsNum=0; formsNum<window.document.forms.length; formsNum++) {
    //����FORM�е�����ELEMENT
    for (elementsNum=0; elementsNum<window.document.forms[formsNum].elements.length; elementsNum++) {
      //Ѱ�Ҵ���ѡ��Ԫ��
      //alert(window.document.forms[formsNum].elements[elementsNum].name);
      if (window.document.forms[formsNum].elements[elementsNum].name == showObjName) {
	   	  showObj = window.document.forms[formsNum].elements[elementsNum];
	   	  showName = window.document.forms[formsNum].elements[elementsNum+1];
	  	  break;
	  	}
	  }
	}

  //Ѱ��������
  var win = searchMainWindow(this);
  if (win == false) { win = this; }

  //��������������ݣ���������ȡ����
  if (win.parent.VD.gVCode.getVar(strCode) != false) {
    arrCode = win.parent.VD.gVCode.getVar(strCode);
    cacheFlag = true;
  }
  else {
    urlStr = "../common/jsp/CodeQueryWindow.jsp?codeType=" + strCode;
    sFeatures = "status:no;help:0;close:0;dialogWidth:150px;dialogHeight:0px;dialogLeft:-1;dialogTop:-1;resizable=1";

    //�������ݿ����CODE��ѯ�����ز�ѯ�����strQueryResult
    strQueryResult = window.showModalDialog(urlStr, "", sFeatures);
  }

  //��ֳ�����
  try {
    if (!cacheFlag) {
      arrCode = decodeEasyQueryResult(strQueryResult);

      strCodeSelect = "";
      for (i=0; i<arrCode.length; i++) {
        strCodeSelect = strCodeSelect + "<option value=" + arrCode[i][0] + ">";
        strCodeSelect = strCodeSelect + arrCode[i][0] + "-" + arrCode[i][1];
        strCodeSelect = strCodeSelect + "</option>";
      }

      //����ֺõ����ݷŵ��ڴ���
      win.parent.VD.gVCode.addArrVar(strCode, "", arrCode);
      //�����Ƿ������ݴӷ������˵õ�,�����øñ���
      win.parent.VD.gVCode.addVar(strCode+"Select","",strCodeSelect);
    }
    cacheFlag = false;

    for (i=0; i<arrCode.length; i++) {
	    if (showObj.value == arrCode[i][0]) {
      //showObj.value = arrCode[i][0] + "-" + arrCode[i][1];
      	showName.value = arrCode[i][1];
//      	alert(showName.value);
//      	alert(showName.name);
	    }
    }
  }
  catch(ex)
  {}
  //alert(arrCode);
}


/**
 * ��������Ա�У�����֤�ŵĺ���
 * �����������֤�����룬�������ڣ��Ա�
 * ����  ����ֵ
 */
function chkIdNo(iIdNo, iBirthday ,iSex)
{
  var tmpStr="";
  var idDate="";
  var tmpInt=0;
  var strReturn = "";

  iIdNo = trim(iIdNo);
  iBirthday = trim(iBirthday);
  iSex = trim(iSex);

  if ((iIdNo.length!=15) && (iIdNo.length!=18))
  {
    strReturn = "��������֤��λ������";
    return strReturn;
  }

  if (!(isDate(iBirthday)))
  {
  	strReturn = "��������ڸ�ʽ����";
    return strReturn;
  }

  //ת�����ڸ�ʽ��yy��mm��dd��by Minim
  var arrDate = iBirthday.split("-");
  if (arrDate[1].length == 1) arrDate[1] = "0" + arrDate[1];
  if (arrDate[2].length == 1) arrDate[2] = "0" + arrDate[2];
  iBirthday = arrDate[0] + "-" + arrDate[1] + "-" + arrDate[2];

  if (iSex!="0" && iSex!="1")
  {
  	strReturn = "������Ա���ȷ";
    return strReturn;
  }

  if (iIdNo.length==15)
  {
    tmpStr=iIdNo.substring(6,12);
    tmpStr= "19" + tmpStr;
    tmpStr= tmpStr.substring(0,4) + "-" + tmpStr.substring(4,6) + "-" + tmpStr.substring(6)

    if ( iBirthday == tmpStr )
    {
      if (iSex=="0")
      {
      	tmpInt = parseInt(iIdNo.substring(14));
      	tmpInt = tmpInt % 2
      	if (tmpInt==0)
      	{
      	  strReturn = "������Ա������֤�ŵ���Ϣ��һ��";
          return strReturn;
      	}
      }
      else
      {
      	tmpInt = parseInt(iIdNo.substring(14));
      	tmpInt = tmpInt % 2
      	if (tmpInt!=0)
      	{
      	  strReturn = "������Ա������֤�ŵ���Ϣ��һ��";
          return strReturn;
      	}
      }
    }
    else
    {
      strReturn = "��������������֤�ŵ���Ϣ��һ��";
      return strReturn;
    }

    return strReturn;
  }

  if (iIdNo.length==18)
  {
  	tmpStr=iIdNo.substring(6,14);
  	tmpStr= tmpStr.substring(0,4) + "-" + tmpStr.substring(4,6) + "-" + tmpStr.substring(6)

    if ( iBirthday == tmpStr )
    {
      if (iSex=="0")
      {
      	tmpInt = parseInt(iIdNo.substring(16,17));
      	tmpInt = tmpInt % 2
      	if (tmpInt==0)
      	{
      	  strReturn = "������Ա������֤�ŵ���Ϣ��һ��";
          return strReturn;
      	}
      }
      else
      {
      	tmpInt = parseInt(iIdNo.substring(16,17));
      	tmpInt = tmpInt % 2
      	if (tmpInt!=0)
      	{
      	  strReturn = "������Ա������֤�ŵ���Ϣ��һ��";
          return strReturn;
      	}
      }
    }
    else
    {
      strReturn = "��������������֤�ŵ���Ϣ��һ��";
      return strReturn;
    }

    return strReturn;
  }
}

/**
 * ͨ�����֤�ŵĵõ��������ں���
 * �����������֤������
 * ����  ��������
 */
function getBirthdatByIdNo(iIdNo)
{
  var tmpStr="";
  var idDate="";
  var tmpInt=0;
  var strReturn = "";

  iIdNo = trim(iIdNo);

  if ((iIdNo.length!=15) && (iIdNo.length!=18))
  {
    strReturn = "��������֤��λ������";
    return strReturn;
  }

  if (iIdNo.length==15)
  {
    tmpStr=iIdNo.substring(6,12);
    tmpStr= "19" + tmpStr;
    tmpStr= tmpStr.substring(0,4) + "-" + tmpStr.substring(4,6) + "-" + tmpStr.substring(6)

    return tmpStr;
  }
  else// if (iIdNo.length==18)
  {
  	tmpStr=iIdNo.substring(6,14);
  	tmpStr= tmpStr.substring(0,4) + "-" + tmpStr.substring(4,6) + "-" + tmpStr.substring(6)

    return tmpStr;
  }
}



/**
 * �ó������ڼ�������
 * ��������������yy��mm��dd
 * ����  ����
 */
function calAge(birthday) {
  var arrBirthday = birthday.split("-");
  if (arrBirthday[1].length == 1) arrBirthday[1] = "0" + arrBirthday[1];
  if (arrBirthday[2].length == 1) arrBirthday[2] = "0" + arrBirthday[2];

  var today = new Date();
  var arrToday = new Array();
  arrToday[0] = today.getYear();
  arrToday[1] = today.getMonth() + 1;
  arrToday[2] = today.getDate();

  var age = arrToday[0] - arrBirthday[0] - 1;
  //��ǰ�´��ڳ�����
  //alert(arrToday[1] + " | " + arrBirthday[1] + " | " + (arrToday[1] > arrBirthday[1]));
  if (arrToday[1] > arrBirthday[1]) {
    age = age + 1;
    return age;
  }
  //��ǰ��С�ڳ�����
  else if (arrToday[1] < arrBirthday[1]) {
    return age;
  }
  //��ǰ�µ��ڳ����µ�ʱ�򣬿�������
  else if (arrToday[2] >= arrBirthday[2]) {
    age = age + 1;
    return age;
  }
  else {
    return age;
  }
}

/**
 * ��Ѱ�����ڣ�����CodeSelect��������
 * ����
 * ����
 */
function searchMainWindow(win) {
  if (typeof(win) != "object") {
    return false;
  }
  //alert(win.top.name);

  if (win.top.name == "Lis") {
    return win.top;
  }
 
  return searchMainWindow(win.top.opener);
}


//У���ݽ��Ѻŷ���
function verifyTempfeeNo(tempfeeNo) {
	//ȥϵͳ��LDSysVar�в�ѯSysvar�ֶ���ΪcheckNewType�ļ�¼���ж��Ƿ���Ҫȥ��ѯ��֤״̬��
	var tSql = "select Sysvarvalue from LDSysVar where Sysvar='CheckNewType'";
	var tResult = easyExecSql(tSql, 1, 0, 1);
	//Ϊ��У�飬����ldsysvar����Ϊ3
	if(tResult=="1" || tResult=="3") {
		//����鵽�ü�¼��������Ҫ��ѯ��֤״̬��
		//ȥ��֤״̬�����ѯ�ú����Ƿ���Ч,�ݽ����վݺ�
		var strSql = "select CertifyCode from LZCardTrack where Startno<='"+tempfeeNo+"' and Endno>='"+tempfeeNo+"' and Receivecom = 'D"+fm.all('AgentCode').value+"' and StateFlag='0' and CertifyCode in (select CertifyCode from LMCertifyDes where CertifyClass2 = '0')";
		var strResult=easyQueryVer3(strSql, 1, 0, 1);
		if(!strResult) {
			alert("�õ�֤����֤����Ϊ��"+tempfeeNo+" ��û�з��Ÿ��ô����ˣ�"+fm.all('AgentCode').value+"��!");
			return false;
		}
	}
	return true;
}

//У��ӡˢ�ŷ���
function verifyPrtNo(prtNo) {
	//ȥϵͳ��LDSysVar�в�ѯSysvar�ֶ���ΪcheckNewType�ļ�¼���ж��Ƿ���Ҫȥ��ѯ��֤״̬��
	var tSql = "select Sysvarvalue from LDSysVar where Sysvar='CheckNewType'";
	var tResult = easyExecSql(tSql, 1, 0, 1);
	if(tResult=="2" || tResult=="3") {
		//����鵽�ü�¼��������Ҫ��ѯ��֤״̬��
		//ȥ��֤״̬�����ѯ�ú����Ƿ���Ч,Ͷ����ӡˢ����
//		var cardType = prtNo.substring(2, 4);
//		if (cardType=="11") {
//			cardType = "1101";
//		}
//		else if (cardType=="12") {
//			cardType = "1201";
//		}
//		else if (cardType=="15") {
//			cardType = "1501";
//		}
//		else if (cardType=="16") {
//			cardType = "1601";
//		}
//		var strResult;
//		var strSql="";
//		if (cardType=="14") {
//			//cardType = "1401";
//			strSql = "select CertifyCode from LZCardTrack where Startno<='"+prtNo+"' and Endno>='"+prtNo+"' and Receivecom = 'D"+fm.all('AgentCode').value+"' and StateFlag='0'";
//			strResult=easyQueryVer3(strSql, 1, 0, 1);
//		}
//		else if(cardType=="24") {
//			strSql = "select CertifyCode from LZCardTrack where Startno<='"+prtNo+"' and Endno>='"+prtNo+"' and Receivecom = 'D"+fm.all('AgentCode').value+"' and StateFlag='0'";
//			strResult=easyQueryVer3(strSql, 1, 0, 1);
//		}
//		else {
		var strSql = "select CertifyCode from LZCardTrack where Startno<='"+prtNo+"' and Endno>='"+prtNo+"' and Receivecom = 'D"+fm.all('AgentCode').value+"' and StateFlag='0'";
		var strResult=easyQueryVer3(strSql, 1, 0, 1);
//		}
		if(!strResult) {
			alert("�õ�֤����֤����Ϊ��"+prtNo+" ��û�з��Ÿ��ô����ˣ�"+fm.all('AgentCode').value+"��!");
			return false;
		}
	}
	return true;
}


/**
 * ��ʾԪ�ص�Title��Ϣ�������Ϣ�϶��޷�ֱ���ڽ���Ԫ���л��������Ϣ�����⣩
 */
function showTitle() {
  var formsNum = 0;          //�����е�FORM��
  var elementsNum = 0;       //FORM�е�Ԫ����
  var strEvent = "";         //����onDoubleClick�¼�����
  var urlStr = "";
  var sFeatures = "";
  var strCode = "";          //����ѡ��
  var strQueryResult = "";   //����ѡ��Ĳ�ѯ�����
  var arrCode = null;        //�������
  var strCodeValue = "";     //����ֵ
  var cacheFlag = false;     //�ڴ��������ݱ�־

  var strCodeSelect = "";

  //Ѱ��������
  var win = searchMainWindow(this);
  if (win == false) { win = this; }

  //��������FORM
  for (formsNum=0; formsNum<window.document.forms.length; formsNum++) {
    //����FORM�е�����ELEMENT
    for (elementsNum=0; elementsNum<window.document.forms[formsNum].elements.length; elementsNum++) {
      //Ѱ�Ҵ���ѡ��Ԫ��
      if (window.document.forms[formsNum].elements[elementsNum].className == "code") {
       //ȡ������ֵ
        strCodeValue = window.document.forms[formsNum].elements[elementsNum].value;

        //��ֵ�򲻴���
        if (strCodeValue == "") continue;
      }

      //��ʾtitle
      if (window.document.forms[formsNum].elements[elementsNum].type == "text") {
         window.document.forms[formsNum].elements[elementsNum].title = window.document.forms[formsNum].elements[elementsNum].value;
      }

    }
  }
}

/**
 *���ھ۽�����
 *������show��Ҫ��ʾ�Ĵ���
 */
function myonfocus(show){
	if(show!=null)
	{
	  try
	  {
	    show.focus();
	  }
	  catch(ex)
	  {
	    show=null;
	  }
	}
}
//��ʼ���ؼ�����
function initElementtype(){
    for(var fm=0;fm<document.forms.length;fm++){
      var theElements=document.forms[fm].elements;
      for(var i=0;i<theElements.length;i++){
        if(theElements[i].elementtype && theElements[i].elementtype.indexOf("nacessary")!=-1 )
            theElements[i].insertAdjacentHTML("afterEnd","<font color=red>&nbsp;*</font>");
        if(theElements[i].elementtype && theElements[i].elementtype.indexOf("misty")!=-1 )
            theElements[i].insertAdjacentHTML("afterEnd","<font color=red>&nbsp;?</font>");
      }
    }
}

//��ʾtextarea�е�����
function showTextareaDiv(parm1,parm2){
    var ex,ey;
    ex = window.event.clientX+document.body.scrollLeft;  //�õ��¼�������x
    ey = window.event.clientY+document.body.scrollTop;   //�õ��¼�������y
    var str=fm.all( parm1 ).all(parm2).value;
    Gridobj=fm.all(parm1 ).all(parm2);
    divDownList.innerHTML='<table id="tabList" style="width:100%" border="0" cellpadding="0" cellspacing="0">'
    +'<tr><td align="right"><textarea class=common2 rows=4 id=textareavalue name=textareavalue value="" style="overflow:auto;width:100%"></textarea></td></tr>'
    +'<tr><td align="right"><input type="button" value="ȷ��" onclick="insertvalue()"></td></tr></table>';
    textareavalue.value=str;
    divDownList.style.left=ex;
    divDownList.style.top =ey;
    divDownList.style.display="";
}
//������textarea����������ؼ�
function insertvalue(){
  Gridobj.value=textareavalue.value;
  divDownList.style.display="none";
}
//����ַ������Ƿ�������  ����--true û��--false
function chkzh(tchar){
    if (tchar =="")
        return false;
    var pattern = /^([\u4E00-\u9FA5]|[\uFE30-\uFFA0])*$/gi;
    if (pattern.test(tchar))
        return true;
    else
        return false;
}

//�������֤��ȡ���Ա� update 2004-12-09 wzw
function getSexByIDNo(iIdNo){
  var tSex="";
  var strReturn="";
  if ((iIdNo.length!=15) && (iIdNo.length!=18))
  {
    strReturn = "��������֤��λ������";
    return strReturn;
  }
  var tmpInt=0;
  if(iIdNo.length==15){
    tmpInt = parseInt(iIdNo.substring(14));
  }
  if(iIdNo.length==18){
    tmpInt = parseInt(iIdNo.substring(16,17));
  }
  tmpInt = tmpInt % 2;
  if (tmpInt==0){
    tSex="1";
  }
  else {
    tSex="0";
  }
  return tSex;
}


/*
 * ����Ĵ����Ǹ���ҳ��title��ʾ��ʾ��ʽ�Ĵ���
 * Ĭ�ϵ���ʾtitleʱ��̫�̲�ˬ
 * update 2004-12-09 wzw
 */
ToolTipGlobal={id:0,getId:function(o){this.all[this.all.length]=o;return this.id++},all:[]};
function ToolTip(defaultOpacity,font,BGround,color,border,offsetOn,offsetOff)
{
	this.id = ToolTipGlobal.getId(this);
	this.defaultOpacity = defaultOpacity;
	this.opacity = defaultOpacity;
	this.font = font;
	this.BGround = BGround;	//title��ʾ�ı�����ɫ
	this.border = border;
	this.timerOn = null;
	this.timerOff = null;
	this.offsetOn = offsetOn;
	this.offsetOff = offsetOff;
	this.control = null;
	var o = this;
	window.attachEvent("onload",function(){ o.setup();});
}
ToolTip.prototype.fadeOn = function()
{
	window.clearTimeout(this.timerOff);
	this.timerOn = window.setTimeout("ToolTipGlobal.all["+this.id+"].fade(1)",this.offsetOn[1]);
}
ToolTip.prototype.fadeOff = function()
{
	window.clearTimeout(this.timerOn);
	this.timerOff = window.setTimeout("ToolTipGlobal.all["+this.id+"].fade(0)",this.offsetOff[1]);
}
ToolTip.prototype.setOpacity = function(x)
{
	this.opacity = x;
	this.control.style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity="+ x +") progid:DXImageTransform.Microsoft.Shadow(color='#FF444444', Direction=135, Strength=3)";
}
ToolTip.prototype.fade = function(x)
{
	var o = this.control;
	var ox = this.opacity;
	if(x)
	{
		if(ox + this.offsetOn[0] <100)
		{
			this.setOpacity(ox+this.offsetOn[0]);
			this.fadeOn();
		}
		else
		{
			this.setOpacity(100);
		}
	}
	else
	{
		if(ox - this.offsetOff[0]>this.defaultOpacity)
		{
			this.setOpacity(ox - this.offsetOn[0]);
			this.fadeOff();
		}
		else
		{
			this.setOpacity(this.defaultOpacity);
			o.style.visibility = "hidden"
		}
	}
}
ToolTip.prototype.setup = function()
{
	var o = document.createElement("div");
	var oThis = this;
	with(o.style)
	{
		position = "absolute";
		top = "0px";
		left = "0px";
		font = this.font;
		zIndex = 99999;
		background = this.BGround;
		color = this.color;
		border = this.border;
		padding = "2px 4px";
		visibility = "hidden";
	}
	document.body.appendChild(o);
	this.control = o;
	document.attachEvent("onmouseover",function(){
		var e = window.event.srcElement;
		if(e.title != "")
		{
			e.tip = e.title;
			e.title = "";
		}
		if(typeof(e.tip) != "undefined" && e.tip != null)
		{
			o.innerHTML = e.tip;
			oThis.setOpacity(oThis.defaultOpacity);
			var x,y,docheight,docwidth,dh,dw;
			x = window.event.clientX + document.body.scrollLeft;	//�����¼����ں�����
			//document.body.scrollLeft����������������
			y = window.event.clientY + document.body.scrollTop;	//�����¼�����������
			docheight = document.body.clientHeight;	//�����¼�����������߶�
			docwidth  = document.body.clientWidth;	//�����¼�������������
			dh =(o.offsetHeight + y) - docheight;
			dw =(o.offsetWidth + x)  - docwidth;
//			o.offsetWidth = e.offsetWidth;
			if(dw > 0)
			{
//				o.style.left =(x - o.offsetWidth) + document.body.scrollLeft - 5 ;
				o.style.left = x;
			}
			else
			{
//				o.style.left = x + document.body.scrollLeft + 10;
				o.style.left = x;
			}
			if(dh > 0)
			{
				o.style.top = y  - 5 ;
			}
			else
			{
				o.style.top  = y  + 10 ;
			}
//			o.style.width = e.offsetWidth;
			o.style.visibility = "visible";
			oThis.fadeOn();
		}
	});
	//����ƿ�Ŀ���ʱ�򴥷��¼�
	document.attachEvent("onmouseout",function(){
		var e = window.event.srcElement;
		if(typeof(e.tip) != "undefined" && e.tip != null)
		{
//			oThis.fadeOff();
			//����titile��Ϣ
			o.style.visibility = "hidden";
		}
	});
};
var tooltip = new ToolTip(20,"9pt Arial ����","#ffffdd","#000000","1px solid #000000",[8,20],[8,20]);
var tooltip =new ToolTip(20,"9pt Arial ����","#ffffdd","#000000","1px solid #000000",[8,20],[8,20]);

function OpenWindowNew(strurl,windowname,opentype,width,height)
{

     if(opentype=="left")
     {
      window.open(strurl,windowname,'width='+screen.availWidth+',height='+screen.availHeight+',top=0,left=0,toolbar=0,location=0,directories=0,menubar=0,scrollbars=1,resizable=1,status=0');
     }

     if (width=='undefined' || width==null  )
     {
     	width=600
     }
     if ( height=='undefined'||  height==null )
     {
     	height=500
     }
     if(opentype=="middle")
     {
        var  iWidth=width; //ģ̬���ڿ��
        var  iHeight=height;//ģ̬���ڸ߶�
        var  iTop=(window.screen.height-iHeight)/2;
        var  iLeft=(window.screen.width-iWidth)/2;
        window.open(strurl,windowname,'width='+iWidth+',height='+iHeight+',top='+iTop+',left='+iLeft+',toolbar=0,location=0,directories=0,menubar=0,scrollbars=1,resizable=1,status=0');
     }
}
/**
* ��ѯָ���ֶε�ֵ
* tableName:����
* fieldName:�ֶ���
* fieldValue:��ѯ����
* returnField:�����ֶ���
* ������ڷ�������,��֮����null
*/
function getNameByCode(returnField,tableName,fieldName,fieldValue){
	var strSQL = "";
	if(fieldValue!='' && fieldValue!=null){
		strSQL = "select "+returnField+" from "+tableName+" where "+fieldName+" = '"+fieldValue+"'";
		strQueryResult = easyQueryVer3(strSQL,1,0,1,0,1);
		//�ж��Ƿ��ѯ�ɹ�
		if (!strQueryResult){
			return("");
		}
		var arrReturn = new Array();
		arrReturn = decodeEasyQueryResult(strQueryResult,0,1);
		return arrReturn[0][0];
	}
	else{
		return("");
	}
}
/**
* ��LDCodeȡ�ô����Ӧ������
* CodeType:�ֶ�����
* Code:����
* ������ڷ�������,��֮����""
*/
function getNameFromLDCode(CodeType,Code){
	var tCodeType=CodeType.toLowerCase();
	var tCode=Code;

	if(tCode!='' && tCode!=null){
		var arrSelected=new Array();

		var strSQL = "";
		strSQL = "select CodeName from LDCode where CodeType='"+tCodeType+"' and Code='"+tCode+"'";

		var strQueryResult = easyQueryVer3(strSQL,1,0,1,0,1);
		arrSelected = decodeEasyQueryResult(strQueryResult,0,1);

		if(arrSelected==null)
			return("");
		else
			return(arrSelected[0][0]);
	}
	else{
		return("");
	}
}

  /**
   * ���㴫������ǰn����n�������
   *
   *
   *
   *
   *
   *
   *
   */
function newDate(oldDate,months)
{
	if(oldDate==""||months=="")
	{
		return false;
	}
	if (typeof(oldDate) == "string") {
		origDate = getDate(oldDate);
	}
	var oldD=origDate.getDate();
	var oldM=origDate.getMonth();
	var oldY=origDate.getFullYear();
	var tempM=oldM+months;
	var newM=tempM;
	var newY=oldY;
while (newM>12||newM<1)
	{
		if (newM>12)
		{
			newM=tempM-12;
			newY=oldY+1;
		}
		if(newM<1)
		{
			newM=tempM+12;
			newY=oldY-1;
		}
	}

	newD=oldD;
	splitOp='-';
	newDate=newY+splitOp+newM+splitOp+newD;
//	alert(newDate);
	return newDate;
}

//ȡĳ������
function getDays(month, year)
{
	var daysInMonth = new Array(0,31, 28, 31, 30, 31, 30, 31, 31,30, 31, 30, 31);
	 if (2 == month)
     return ((0 == year % 4) && (0 != (year % 100))) ||(0 == year % 400) ? 29 : 28;
  else
     return daysInMonth[month];
}
//��������������
function AgeToBirthday(tAge)
{
	var today = new Date();
	var year = String(today.getYear()-tAge);
	var month = String(today.getMonth() + 1);
	var day = String(today.getDate());
	var Birthday = year+"-"+month+"-"+day;
	return Birthday;
}
//У��ĳһ�������Ƿ���ȷ����Ҫ����������ȷ������4��31��
function getOneMonthError(InputDate)
{
	if(InputDate == "") return 0;
	var year=InputDate.substring(0,InputDate.indexOf("-"));
	var month=InputDate.substring(InputDate.indexOf("-")+1,InputDate.lastIndexOf("-"));
	if(month.length==2)
	{
		if(month.indexOf("0")==0)
		{
			month = month.substring(1);
		}
	}
	var day=InputDate.substring(InputDate.lastIndexOf("-")+1,InputDate.length);
	var chkDay = getDays(month,year)
	var calChkDay = chkDay/1;
	var calday = day/1;
	var tSub =  calChkDay - calday;
	return tSub;
}
//У��ÿ���µ������Ƿ�����
function chkDayAndMonth()
{
	for (formsNum=0; formsNum < window.document.forms.length; formsNum++)
	{
		//����FORM�е�����ELEMENT
		for (elementsNum=0; elementsNum < window.document.forms[formsNum].elements.length; elementsNum++)
		{
			//Ѱ�Ҵ���ѡ��Ԫ��
			if (window.document.forms[formsNum].elements[elementsNum].className == "coolDatePicker")
			{
				var chkDate = window.document.forms[formsNum].elements[elementsNum].value;
				if(chkDate != "")
				{
					var Differ = getOneMonthError(chkDate);
					if(Differ < 0)
					{
						alert("¼�����ڸ�ʽ����");
						window.document.forms[formsNum].elements[elementsNum].focus();
						return false;decode
					}
				else
					{
						return true;
					}
				}
				return true;
			}
		}
	}
}
function ChangeDecodeStr(){
	//alert(window.document.forms[0].elements.length);
  for (var elementsNum=0; elementsNum<window.document.forms[0].elements.length; elementsNum++) {
      if (window.document.forms[0].elements[elementsNum].type == "text"
          || window.document.forms[0].elements[elementsNum].type == "textarea" ) {
          	if(window.document.forms[0].elements[elementsNum].value.indexOf("^")!=-1){
		        window.document.forms[0].elements[elementsNum].value = replace(window.document.forms[0].elements[elementsNum].value,"^","@#");
		      }
        //window.document.forms[0].elements[elementsNum].onfocus = debugShow;
      }
    }
}
function UnChangeDecodeStr(){
	//alert(window.document.forms[0].elements.length);
  for (var elementsNum=0; elementsNum<window.document.forms[0].elements.length; elementsNum++) {
      if (window.document.forms[0].elements[elementsNum].type == "text"
          || window.document.forms[0].elements[elementsNum].type == "textarea" ) {
          	if(window.document.forms[0].elements[elementsNum].value.indexOf("@#")!=-1){
		        window.document.forms[0].elements[elementsNum].value = replace(window.document.forms[0].elements[elementsNum].value,"@#","^");
		      }
        //window.document.forms[0].elements[elementsNum].onfocus = debugShow;
      }
    }
}
//�ϸ�У�����֤����

//���� 2005-7-2 17:05

//������ݺ�������������룬
//��ʮ��λ���ֱ������һλ����У������ɡ�
//����˳�������������Ϊ����λ���ֵ�ַ�룬��λ���ֳ��������룬
//��λ����˳�����һλ����У���롣˳����������ָ����ԣ�ż���ָ�Ů�ԡ�
//У�����Ǹ���ǰ��ʮ��λ�����룬����ISO7064:1983.MOD11-2У�����������ļ����롣

 function checkIdCard(idCard)
 {
    var SystemDate=new Date();
    var year=SystemDate.getFullYear();
    var month=SystemDate.getMonth()+1;
    var day=SystemDate.getDate();
		var yyyy; //��
		var mm; //��
		var dd; //��
		var birthday; //����
		var sex; //�Ա�

    var id=idCard;
    var id_length=id.length;

    if (id_length==0)
    {
        alert("���������֤����!");
        return false;
    }

    if (id_length!=15 && id_length!=18)
    {
        alert("���֤�ų���ӦΪ15λ��18λ��");
        return false;
    }

    if (id_length==15)
    {
    	 for(var i =0 ;i<id_length;i++)  
    	 {
    	 	 if(isNaN(idCard.charAt(i)))
    	 	 {
    	 	 	alert("15λ���֤���в������ַ���");
          return false;
    	 	 }
    	 }
    	
        yyyy="19"+id.substring(6,8);
        mm=id.substring(8,10);
        dd=id.substring(10,12);

        if (mm>12 || mm<=0){
            alert("���֤���·ݷǷ���");
            return false;
        }

        if (dd>31 || dd<=0){
            alert("���֤�����ڷǷ���");
            return false;
        }
        
        
	      if((mm==4||mm==6||mm==9||mm==11)&&(dd>30))//4,6,9,11�·����ڲ��ܳ���30
				{
				    alert("���֤�����ڷǷ���");
				    return false;
				}
	
				if(mm==2)//�ж�2�·�
				{
					if(LeapYear(yyyy))
					{
					   if(dd>29)
					   {
							  alert("���֤�����ڷǷ���");
						    return false;
					   }
					}
					else
					{
					   if(dd>28)
					   {
					      alert("���֤�����ڷǷ���");
						    return false;
					   }
					}
				}

    }
    else if (id_length==18)
    	{
    		
    	 for(var i =0 ;i<id_length-1;i++)  
    	 {
    	 //	alert(i+"="+idCard.charAt(i));
    	 	 if(isNaN(idCard.charAt(i)))
    	 	 {
    	 	 	alert("���֤����ǰ17λ�в������ַ���");
    	 	 	return false;
    	 	 }
    	 }
    	 
    	 if(isNaN(idCard.charAt(17))&& idCard.charAt(17) !="X" && idCard.charAt(17) !="x" )
    	 {
    	 	  alert("���֤���һλ����");
    	 	  return false;
    	 }
        if (idCard.indexOf("X") > 0 && idCard.indexOf("X")!=17 || idCard.indexOf("x")>0 && idCard.indexOf("x")!=17){
            alert("���֤��\"X\"����λ�ò���ȷ��");
            return false;
      }

        yyyy=id.substring(6,10);
        if (yyyy>year || yyyy<1900)
        {
            alert("���֤����ȷǷ���");
            return false;
        }

        mm=id.substring(10,12);
        if (mm>12 || mm<=0)
        {
            alert("���֤���·ݷǷ���");
            return false;
        }
        if(yyyy==year&&mm>month)
        {
            alert("���֤���·ݷǷ���");
            return false;        	
        }

      dd=id.substring(12,14);
      if (dd>31 || dd<=0)
      {
            alert("���֤�����ڷǷ���");
            return false;
      }

			if((mm==4||mm==6||mm==9||mm==11)&&(dd>30))//4,6,9,11�·����ڲ��ܳ���30
			{
			    alert("���֤�����ڷǷ���");
			    return false;
			}

			if(mm==2)//�ж�2�·�
			{
				if(LeapYear(yyyy))
				{
				   if(dd>29)
				   {
						  alert("���֤�����ڷǷ���");
					    return false;
				   }
				}
				else
				{
				   if(dd>28)
				   {
				      alert("���֤�����ڷǷ���");
					    return false;
				   }
				}
			}
        if(yyyy==year&&mm==month&&dd>day)
        {
            alert("���֤�����ڷǷ���");
            return false;        	
        }


        if (id.charAt(17)=="x" || id.charAt(17)=="X")
        {
            if ("x"!=GetVerifyBit(id) && "X"!=GetVerifyBit(id))
            {
                alert("���֤У������������һλ��");
                return false;
            }

        }else{
            if (id.charAt(17)!=GetVerifyBit(id))
            {
               alert("���֤У������������һλ��");
               return false;
            }
        }
    }
    return true;
}

//�������֤У����

//���� 2005-7-2 17:06

//ԭ��:
//��(a[i]*W[i]) mod 11 ( i = 2, 3, ..., 18 )(1)
//"*" ��ʾ�˺�
//i--------��ʾ���֤����ÿһλ����ţ��������������Ϊ18�����Ҳ�Ϊ1��
//a[i]-----��ʾ���֤����� i λ�ϵĺ���
//W[i]-----��ʾ�� i λ�ϵ�Ȩֵ W[i] = 2^(i-1) mod 11
//���㹫ʽ (1) ����Ϊ R
//�����±��ҳ� R ��Ӧ��У���뼴ΪҪ�����֤�����У����C��
//R 0 1 2 3 4 5 6 7 8 9 10
//C 1 0 X 9 8 7 6 5 4 3 2
// X ���� 10�����������е� 10 ���� X
//15λת18λ��,����У��λ�����һλ

 function GetVerifyBit(id){
    var result;
    var nNum=eval(id.charAt(0)*7+id.charAt(1)*9+id.charAt(2)*10+id.charAt(3)*5+id.charAt(4)*8+id.charAt(5)*4+id.charAt(6)*2+id.charAt(7)*1+id.charAt(8)*6+id.charAt(9)*3+id.charAt(10)*7+id.charAt(11)*9+id.charAt(12)*10+id.charAt(13)*5+id.charAt(14)*8+id.charAt(15)*4+id.charAt(16)*2);
    nNum=nNum%11;
    switch (nNum) {
       case 0 :
          result="1";
          break;
       case 1 :
          result="0";
          break;
       case 2 :
          result="X";
          break;
       case 3 :
          result="9";
          break;
       case 4 :
          result="8";
          break;
       case 5 :
          result="7";
          break;
       case 6 :
          result="6";
          break;
       case 7 :
          result="5";
          break;
       case 8 :
          result="4";
          break;
       case 9 :
          result="3";
          break;
       case 10 :
          result="2";
          break;
    }
    //document.write(result);
    return result;
}

//У���Ƿ�����
//xuxin
function LeapYear(year)
{
  return ((0 == year % 4) && (0 != (year % 100))) ||(0 == year % 400);
}
/**
 * ��String���������trim����
 */
function String.prototype.trim()
{
	//����������ʽȥ��ͷβ�Ŀո�
	return this.replace(/(^\s*)|(\s*$)/g,"");
}