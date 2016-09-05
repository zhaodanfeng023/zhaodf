
/************************************************************************
 *
 *                  ��������: MulLine.js
 *                  ������: ���¼����  
 *
 ************************************************************************
 */

/************************************************************
 *                    �ࣺ����������
 *
 ************************************************************
 */
function MulLineEnter( iFormName , iInstanceName )
{
  //����������Ҫ�û���ʼ��
  this.formName     = iFormName || "fm";          //���ؼ�����
  this.instanceName = iInstanceName || "";        //ʵ������
  this.mulLineCount = 0 ;                         //��������������
  this.canAdd       = 1 ;                         //�Ƿ�����������ӣ�ɾ��1��ʾ���ԣ�0��ʾ������
  this.canSel       = 0 ;                         //�Ƿ����ѡ��1��ʾ���ԣ�0��ʾ������
  this.displayTitle = 1 ;                         //�Ƿ���ʾ���⣬1��ʾ��ʾ��0��ʾ����ʾ
  this.locked       = 0 ;                         //�Ƿ�������1��ʾ������0��ʾ�ɱ༭
  this.canChk       = 0 ;                         //�Ƿ���Ҫ����ѡ��,1��ʾ���Զ���ѡ��0��ʾ������
  this.colCount     = 0 ;                         //�������е���Ŀ
  this.hiddenPlus   = 0 ;                         //����,�Ƿ��������һ�еı�־��0Ϊ��ʾ��1Ϊ����
  this.hiddenSubtraction=0;                       //����,�Ƿ�����ɾ��һ�еı�־��0Ϊ��ʾ��1Ϊ����
  this.recordNo     = 0 ;                         //����,�����ҳ��ʾ������¼����ô��ʾǰ����ֵ��Ϊ����,��ô��2ҳ��ʾ����Ż������ҳ�����
  this.checkFlag    = 0 ;                         //����,��checkAll���������
  this.state        = 0 ;                         //����,�˲������ⲿ���κ�ʵ������,��_ResumeState����һ��ʹ��
  this.arraySave    = new Array();                //���������洫���������
  this.arraySave2   = new Array();                //�������������������--�����Ƿ���ʾ����
  this.chkBoxEventFuncName  = "";                 //�����������ⲿ����CheckBox��ʱ��Ӧ���ⲿ������
  this.chkBoxEventFuncParm   = " ";                 //�����������ⲿ����CheckBox��ʱ��Ӧ���ⲿ��������Ĳ���
  this.chkBoxAllEventFuncName  = "";              //�����������ⲿ����������ȫѡCheckBox��ʱ��Ӧ���ⲿ������
  this.selBoxEventFuncName  = "";                 //�����������ⲿ����RadioBox��ʱ��Ӧ���ⲿ������
  this.selBoxEventFuncParm   = " ";                 //�����������ⲿ����RadioBox��ʱ��Ӧ���ⲿ��������Ĳ���

  this.addEventFuncName  = "";                           //�����������ⲿ����+��ťʱ��Ӧ���ⲿ������
  this.addEventFuncParm   = " ";                    //�����������ⲿ����+��ť��ʱ��Ӧ���ⲿ��������Ĳ���

  this.delEventFuncName  = "";                           //�����������ⲿ����-��ťʱ��Ӧ���ⲿ������
  this.delEventFuncParm   = " ";                    //�����������ⲿ����-��ť��ʱ��Ӧ���ⲿ��������Ĳ���
  this.AllowSort="";                                //����
  this.SortPage="";                                 //������Grid��Ӧ��turnpage
  this.allowsort="AllowSortFun";                         //Grid��������ͨ��������turnpage�еĺ���
  this.windowWidth=window.document.body.clientWidth ;
  this.windowHeight=window.document.body.clientHeight ;
  this.mulLineNum   = 1 ;                          //����,����ͬһ�е�MulLine�ĸ�����Ĭ����1

  this.detailInfo   ="" ;                         //���֧�ֵ��������ڴ˴�������ʾ��Ϣ
  this.tableWidth   ="" ;                         //����table�Ŀ��

  //�������Բ���Ҫ�û���ʼ��
  this.mulLineText  = "";                         //����������һ��ģ�������(�ڲ�ʹ�ã�
  this.mulLineTextTitle = "";                     //���������ı��⣨�ڲ�ʹ�ã�

  //��ʼ�����һ�������У�spanID��-1 �ĳ�-2
  this.maxSpanID    = -1;                         //�������������SpanID��ֵ
  this.errorString = "";                          //�ñ���Ϊ��ִ�з�������ʱ����ʾ�Ĵ�����Ϣ

  //����
  this.loadPage   = _LoadPage;
  this.setFieldValue =_SetFieldValue;

  this.clearData     = _ClearData;
  this.findSpanID    = _FindSpanID;
  this.delBlankLine  = _DelBlankLine;
  this.delCheckTrueLine =_DelCheckTrueLine ;    //ɾ��ѡ�е�CheckBox��
  this.delRadioTrueLine =_DelRadioTrueLine ;    //ɾ��ѡ�е�RadioBox��
  this.lock          = _Lock;
  this.unLock        = _UnLock;
  this.getSelNo      = _GetSelNo;
  this.getChkNo      = _GetChkNo;
  this.checkAll      = _CheckAll;
  this.checkBoxAll   = _CheckBoxAll;
  this.checkBoxAllNot= _CheckBoxAllNot;
  this.checkBoxSel   = _CheckBoxSel;
  this.checkBoxSelM   = _CheckBoxSelM;
  this.radioBoxSel   = _RadioBoxSel;
  this.loadMulLine   = _LoadMulLine;
	this.loadMulLineArr = _LoadMulLineArr;
  this.addOne        = _AddOne;
  this.deleteOne     = _DeleteOne;
  this.keyUp         = _KeyUp;
  this.getErrStr     = _GetErrStr;
  this.setRowColData = _SetRowColData;
  this.getRowColData = _GetRowColData;
  this.getRowData    = _GetRowData;
  this.detailClick   = _detailClick;
  this.checkBoxClick = _CheckBoxClick;
  this.radioClick    = _radioClick;
  this.resumeState   = _ResumeState;
  this.checkValue    = _CheckValue;
  this.checkValue2    = _CheckValue2;
  this.setFocus      = _SetFocus;
  this.getFocus      = _GetFocus;
  this.moveFocus     = _MoveFocus;
  this.setPageMark 	 = _SetPageMark;
  this.SetMakeExcel  =_SetMakeExcel;
  this.getRowColDataByName = _getRowColDataByName;
  this.setRowColDataByName = _setRowColDataByName;
}

function _detailClick(cObj)
{}

function _Lock(iTObj)
{
  var tObj = iTObj || this ;
  if(tObj.locked!=1) //���û��������ִ������
  {
    try
    {
      tObj.locked=1;
      //ע�⣺�����_SetFieldValue������"��ע��"��˵�����ֽ������
      //��Ϊ�����ǽ�_SetFieldValue������ģ�岿�ֵ��ı��滻�ַ�����
      //���_SetFieldValue()�У��ⲿ�ֵ��ı���ʽ���ˣ�����ҲҪ��Ӧ�仯
      eval( tObj.formName + ".all('" + tObj.instanceName + "addOne').disabled=true");
      tObj.mulLineText=replace(tObj.mulLineText,"type=button  value='-'","type=button disabled value='-'");
      if (tObj.mulLineCount>0)
      {
        if(tObj.mulLineCount==1)
        {
          _ResumeState();
          try
          {
            eval( tObj.formName + ".all('" + tObj.instanceName + "Del').disabled=true");
          }
          catch(ex)
          {
            eval( tObj.formName + ".all('" + tObj.instanceName + "Del')[0].disabled=true");
          }
        }
        else
        {
          for(i=0;i<tObj.mulLineCount;i++)
          {
            eval( tObj.formName + ".all('" + tObj.instanceName + "Del')[" + i + "].disabled=true");
          }
        }
      }
    }
    catch(ex)
    {
      _DisplayError("��MulLine.js-->_Lock�����з����쳣:" + ex,tObj);
    }
  }
}

function _UnLock(iTObj)
{
  var tObj = iTObj || this ;
  if(tObj.locked!=0) //���������ִ�н���
  {
    try
    {
      tObj.locked=0;
      //ע�⣺�����_SetFieldValue������"��ע��"��˵�����ֽ������
      //��Ϊ�����ǽ�_SetFieldValue������ģ�岿�ֵ��ı��滻�ַ�����
      //���_SetFieldValue()�У��ⲿ�ֵ��ı���ʽ���ˣ�����ҲҪ��Ӧ�仯
      eval( tObj.formName + ".all('" + tObj.instanceName + "addOne').disabled=false");
      tObj.mulLineText=replace(tObj.mulLineText,"type=button disabled value='-'","type=button  value='-'");
      if (tObj.mulLineCount>0)
      {
        if(tObj.mulLineCount==1)
        {
          _ResumeState();
          try
          {
            eval( tObj.formName + ".all('" + tObj.instanceName + "Del').disabled=false");
          }
          catch(ex)
          {
            eval( tObj.formName + ".all('" + tObj.instanceName + "Del')[0].disabled=false");
          }
        }
        else
        {
          for(i=0;i<tObj.mulLineCount;i++)
          {
            eval( tObj.formName + ".all('" + tObj.instanceName + "Del')[" + i + "].disabled=false");
          }
        }
      }
    }
    catch(ex)
    {
      _DisplayError("��MulLine.js-->_UnLock�����з����쳣:" + ex,tObj);
    }
  }
}

/************************************************************
 *         �������ṩѡ�е�������������canSel����Ϊ1
 *���룺          ��
 *�����          ѡ�������
 ************************************************************
 */
function _GetSelNo(ObjInstance)
{
  var tObjInstance=ObjInstance||this;
  var i=0;
  try
  {
    if (tObjInstance.mulLineCount>0)
    {

      if(tObjInstance.mulLineCount==1)
      {
        _ResumeState();
        try
        {
          if (eval( tObjInstance.formName + ".all('" + tObjInstance.instanceName + "Sel').checked"))
            return 1;
        }
        catch(ex)
        {
          if (eval( tObjInstance.formName + ".all('" + tObjInstance.instanceName + "Sel')[0].checked"))
            return 1;
        }
      }
      else
      {
        for(i=0;i<tObjInstance.mulLineCount;i++)
        {
          if (eval( tObjInstance.formName + ".all('" + tObjInstance.instanceName + "Sel')[" + i + "].checked"))
          {
            return i+1;
          }
        }
      }
    }
    else
    {
      return 0;
    }
  }
  catch(ex)
  {
    _DisplayError("��MulLine.js-->_GetSelNo�����з����쳣:" + ex,tObjInstance);
  }

  return 0;
}

/************************************************************
 *         �������ж�ָ�����Ƿ�ѡ�У�������canSel����Ϊ1
 *���룺          ��
 *�����          ���ѡ�У�����true�����򷵻�false
 ************************************************************
 */
function _radioClick(cObj,colcount)
{
	var ele = document.getElementById("span"+this.instanceName);
	var oldPageNo = ele.getAttribute("PageNo");
	var pageNo;
	var iMax=0;
	iMax=this.mulLineCount;
	var fieldCount=colcount;
	try
	{
		var i=0;
		while(i<iMax)
		{
			if(iMax==1)
			{
				pageNo = "0";
				_ResumeState();

				if (eval(this.formName+".all('"+this.instanceName+"Sel').checked"))
				{
					eval(this.formName+".all('Inp"+this.instanceName+"Sel').value='1'")
					eval(this.formName+".all('"+this.instanceName+"Sel').className='mulnotreadonlyt'");
					eval(this.formName+".all('"+this.instanceName+"No').className='mulnotreadonlyt'");
					var j=1;
					while(j<fieldCount)
					{
						eval(this.formName+".all('"+this.instanceName+j+"').className='mulnotreadonlyt'");
						j++;
					}
				}
				else
				{
					eval(this.formName+".all('Inp"+this.instanceName+"Sel').value=0")
					eval(this.formName+".all('"+this.instanceName+"Sel').className='mulreadonlyt'");
					eval(this.formName+".all('"+this.instanceName+"No').className='mulreadonlyt'");
					var j=1;
					while(j<fieldCount)
					{
						eval(this.formName+".all('"+this.instanceName+j+"').className='mulreadonlyt'");
						j++;
					}
				}





			}
			else
			{
				if (eval(this.formName+".all('"+this.instanceName+"Sel')["+i+"].checked"))





				{
					pageNo = i;
					//oldPageNoΪ0��Ϊ�յ�ʱ�򣬽ű��ж��Ľ����һ�µ�
					if((oldPageNo!=undefined&&oldPageNo!=null&&oldPageNo!="")||oldPageNo=="0")
					{
						eval(this.formName+".all('Inp"+this.instanceName+"Sel')["+oldPageNo+"].value=0");
						eval(this.formName+".all('"+this.instanceName+"Sel')["+oldPageNo+"].className='mulreadonlyt'");
						eval(this.formName+".all('"+this.instanceName+"No')["+oldPageNo+"].className='mulreadonlyt'");
						var j=1;
						while(j<fieldCount)
						{
							var tObj = this.formName+".all('"+this.instanceName+j+"')["+oldPageNo+"].className";
							if( eval(tObj+"=='code8'")||eval(tObj+"=='codeselect'"))



							{
								eval(tObj+"='code8'");
							}
							else
							{
								eval(tObj+"='mulreadonlyt'");
							}
							j++;
						}
					}
					eval(this.formName+".all('Inp"+this.instanceName+"Sel')["+pageNo+"].value='1'")
					eval(this.formName+".all('"+this.instanceName+"Sel')["+pageNo+"].className='mulnotreadonlyt'");
					eval(this.formName+".all('"+this.instanceName+"No')["+pageNo+"].className='mulnotreadonlyt'");
					var j=1;
					while(j<fieldCount)
					{
						var tObj = this.formName+".all('"+this.instanceName+j+"')["+pageNo+"].className";
						if( eval(tObj+"=='code8'")||eval(tObj+"=='codeselect'"))



						{
							eval(tObj+"='codeselect'");
						}
						else
						{
							eval(tObj+"='mulnotreadonlyt'");
						}
						j++;
					}
					break;
				}
			}
			i++;
		}
		if(pageNo!=null&&pageNo!=undefined)
		{
			ele.setAttribute("PageNo",pageNo);
		}
	}
	catch(ex)
	{
		_DisplayError("��MulLine.js-->_radioClick�����з����쳣:"+ex.message,this);
	}
}

/************************************************************
 *         �������ж�ָ�����Ƿ�ѡ�У�������canChk����Ϊ1
 *���룺          ��
 *�����          ���ѡ�У�����true�����򷵻�false
 ************************************************************
 */
function _GetChkNo(cIndex,cObj)
{
  var tObj = cObj || this ;
  var i=0;
  i=cIndex;
  var tReturn;
  var tStr;

  if(tObj.canChk==0)
  {
    alert("no checkBox!");
    return false;
  }

  if(cIndex<0||cIndex>=tObj.mulLineCount)
  {
    alert("��MulLine.js-->getChkNo������ָ���˴������:"+cIndex);
    return false;
  }

  try
  {
    if (tObj.mulLineCount>0&&i<tObj.mulLineCount)
    {

      if(tObj.mulLineCount==1)
      {
        _ResumeState();
        tStr=tObj.formName + ".all('" + tObj.instanceName + "Chk').checked";
        tReturn=eval(tStr);
        //  alert("1 tReturn="+tReturn);
        //����õ���ֵΪnull��˵��������Ϊ1ʱ��������Ŀ��ܣ�
        //����ǴӶ���ɾ����һ�У���ô���ܻ������Ϊ����������������һ��Ԫ�أ����Ի�Ҫ���±�
        //�������⣬������javaScript�л����������أ���ˣ�������Կ����Ը��������������
        try
        {//��undefined���������������Ϊ�е�JS��֧��undefined������Ҫ��������
          if(tReturn==undefined)
            try
            {
              tStr=tObj.formName + ".all('" + tObj.instanceName + "Chk')[0].checked";
              tReturn=eval(tStr);
            }
            catch(ex)
            {
              tStr=tObj.formName + ".all('" + tObj.instanceName + "Chk').checked";
              tReturn=eval(tStr);
            }
        }
        catch(ex)
        {}
        ;

        if(tReturn==null)
        {
          try
          {
            tStr=tObj.formName + ".all('" + tObj.instanceName + "Chk')[0].checked";
            tReturn=eval(tStr);
          }
          catch(ex)
          {
            tStr=tObj.formName + ".all('" + tObj.instanceName + "Chk').checked";
            tReturn=eval(tStr);
          }
        }
        return tReturn;
      }
      else
      {
        if (eval( tObj.formName + ".all('" + tObj.instanceName + "Chk')[" + i + "].checked"))
        {
          return true;
        }
      }
    }
    else
    {
      return false;
    }
  }
  catch(ex)
  {
    _DisplayError("��MulLine.js-->_GetChkNo�����з����쳣:" + ex,tObj);
  }

  return false;
}


/************************************************************
 *         �������ж�ָ�����Ƿ�ѡ�У�������canChk����Ϊ1
 *���룺          ��
 *�����          ���ѡ�У�����true�����򷵻�false
 ************************************************************
 */
function _CheckBoxClick(cObj,colcount)
{
  var fieldCount=colcount;                  
  var i=0,iMax=0;
  iMax=this.mulLineCount;

  try
  {
    if(this.mulLineCount==1)
     {
        _ResumeState();
        try{
          if (eval( this.formName + ".all('" + this.instanceName + "Chk').checked"))
               {
                     eval( this.formName + ".all('Inp" + this.instanceName + "Chk').value='1'")
                     eval( this.formName + ".all('" + this.instanceName +"Chk').className='mulnotreadonlyt'");
                     eval( this.formName + ".all('" + this.instanceName +"No').className='mulnotreadonlyt'");
                     for(j=1;j<fieldCount;j++){
             if( eval( this.formName + ".all('" + this.instanceName +j+"').className=='code8'")||eval( this.formName + ".all('" + this.instanceName +j+"').className=='codeselect'"))
                                 {
                               eval( this.formName + ".all('" + this.instanceName +j+"').className='codeselect'");
                           }
                           else
                           {
                               eval( this.formName + ".all('" + this.instanceName +j+"').className='mulnotreadonlyt'");                                   
                           }                     
                     }                          
                }  
          else
            {
                      eval( this.formName + ".all('Inp" + this.instanceName + "Chk').value='0'")
                      eval( this.formName + ".all('" + this.instanceName +"Chk').className='mulreadonlyt'");
                      eval( this.formName + ".all('" + this.instanceName +"No').className='mulreadonlyt'");
                        for(j=1;j<fieldCount;j++){
                                   if( eval( this.formName + ".all('" + this.instanceName +j+"').className=='code8'")||eval( this.formName + ".all('" + this.instanceName +j+"').className=='codeselect'"))
                                   {
                               eval( this.formName + ".all('" + this.instanceName +j+"').className='code8'");
                             }
                             else
                             {
                               eval( this.formName + ".all('" + this.instanceName +j+"').className='mulreadonlyt'");                                   
                             }                        
                        }             
            }         
           }         
        catch(ex){   
          if (eval( this.formName + ".all('" + this.instanceName + "Chk')[0].checked"))
               {        
               eval( formName + ".all('Inp" + this.instanceName + "Chk')[0].value='1'")
                }        
          else       
            {
               eval( this.formName + ".all('Inp" + this.instanceName + "Chk')[0].value='0'")
            }                
                }             
     }
     else
     {   
        for(i=0;i<iMax;i++)
         {
            if (eval( this.formName + ".all('" + this.instanceName + "Chk')[" + i + "].checked") 
                & eval( this.formName + ".all('Inp" + this.instanceName + "Chk')[" + i + "].value!='1'"))
                {     
                      eval( this.formName + ".all('Inp" + this.instanceName + "Chk')[" + i + "].value='1'")
                      eval( this.formName + ".all('" + this.instanceName +"Chk')[" + i + "].className='mulnotreadonlyt'");
                      eval( this.formName + ".all('" + this.instanceName +"No')[" + i + "].className='mulnotreadonlyt'");
                      for(j=1;j<fieldCount;j++){
                        if( eval( this.formName + ".all('" + this.instanceName +j+"')[" + i + "].className=='code8'")||eval( this.formName + ".all('" + this.instanceName +j+"')[" + i + "].className=='codeselect'"))
                                 {
                               eval( this.formName + ".all('" + this.instanceName +j+"')[" + i + "].className='codeselect'");
                           }
                           else
                           {
                               eval( this.formName + ".all('" + this.instanceName +j+"')[" + i + "].className='mulnotreadonlyt'");                                   
                           }                      
                      }                   
                 }    
                 else if (eval( this.formName + ".all('" + this.instanceName + "Chk')[" + i + "].checked==false") 
                        & eval( this.formName + ".all('Inp" + this.instanceName + "Chk')[" + i + "].value!='0'"))
                 {    
                          eval( this.formName + ".all('Inp" + this.instanceName + "Chk')[" + i + "].value='0'")
                      eval( this.formName + ".all('" + this.instanceName +"Chk')[" + i + "].className='mulreadonlyt'");
                      eval( this.formName + ".all('" + this.instanceName +"No')[" + i + "].className='mulreadonlyt'");
                      for(j=1;j<fieldCount;j++){
                                 if ( eval( this.formName + ".all('" + this.instanceName +j+"')[" + i + "].className=='code8'")||eval( this.formName + ".all('" + this.instanceName +j+"')[" + i + "].className=='codeselect'"))
                                 {
                               eval( this.formName + ".all('" + this.instanceName +j+"')[" + i + "].className='code8'");
                           }
                           else
                           {
                               eval( this.formName + ".all('" + this.instanceName +j+"')[" + i + "].className='mulreadonlyt'");                                   
                           }                      
                      }                    
                 }    
          }
      }       
  }
  catch(ex)
  {
           _DisplayError("��MulLine.js-->_checkBoxClick�����з����쳣:" + ex,this);
  }                                                                     
}



/************************************************************
 *         ������ ʹ�����е�checkBox���ѡ�е�״̬
 *���룺          ��
 *�����          ���ѡ�У�����true�����򷵻�false
 ************************************************************
 */
function _CheckBoxAll(cObj,colcount)
{
		var ele = document.getElementById("span"+this.instanceName);
	var oldPageNo = ele.getAttribute("PageNo");
	var pageNo="";
	var realNo;
	var iMax=0;
	iMax=this.mulLineCount;
	try
	{
		for(i=0;i<iMax;i++)
		{
			pageNo+=","+i+",";
		}
		if(pageNo!=null&&pageNo!=undefined)
		{
			ele.setAttribute("PageNo",pageNo);
		}
	}
	catch(ex)
	{
		alert("_CheckBoxAll"+ex.message);
	}
  var fieldCount=colcount;
  if(this.canChk==0)
  {
    alert("no checkBox!");
    return;
  }
  var i=0,iMax=0;
  iMax=this.mulLineCount;
  try
  {

    try
    {
      eval( this.formName + ".all('checkAll"+this.instanceName+"').value=1");
      eval( this.formName + ".all('checkAll"+this.instanceName+"').checked=true");
    }
    catch(ex)
    {
      alert("error->_CheckBoxAll");
    }
    if(this.mulLineCount==1)
    {
      _ResumeState();
      try
      {
        eval( this.formName + ".all('Inp" + this.instanceName + "Chk').value=1");
        eval( this.formName + ".all('" + this.instanceName + "Chk').checked=true");
        eval( this.formName + ".all('" + this.instanceName +"Chk').className='mulnotreadonlyt'");
        eval( this.formName + ".all('" + this.instanceName +"No').className='mulnotreadonlyt'");
        for(j=1;j<fieldCount;j++)
        {
          if( eval( this.formName + ".all('" + this.instanceName +j+"').className=='code8'")||eval( this.formName + ".all('" + this.instanceName +j+"').className=='codeselect'"))
          {
            eval( this.formName + ".all('" + this.instanceName +j+"').className='codeselect'");
          }
          else
          {
            eval( this.formName + ".all('" + this.instanceName +j+"').className='mulnotreadonlyt'");
          }
        }
      }
      catch(ex)
      {
        eval( this.formName + ".all('Inp" + this.instanceName + "Chk')[0].value=1");
        eval( this.formName + ".all('" + this.instanceName + "Chk')[0].checked=true");
      }
    }
    else
    {
      for(i=0;i<iMax;i++)
      {
        eval( this.formName + ".all('Inp" + this.instanceName + "Chk')[" + i + "].value=1");
        eval( this.formName + ".all('" + this.instanceName + "Chk')[" + i + "].checked=true");
        eval( this.formName + ".all('" + this.instanceName +"Chk')[" + i + "].className='mulnotreadonlyt'");
        eval( this.formName + ".all('" + this.instanceName +"No')[" + i + "].className='mulnotreadonlyt'");
        for(j=1;j<fieldCount;j++)
        {
          if( eval( this.formName + ".all('" + this.instanceName +j+"')[" + i + "].className=='code8'")||eval( this.formName + ".all('" + this.instanceName +j+"')[" + i + "].className=='codeselect'"))
          {
            eval( this.formName + ".all('" + this.instanceName +j+"')[" + i + "].className='codeselect'");
          }
          else
          {
            eval( this.formName + ".all('" + this.instanceName +j+"')[" + i + "].className='mulnotreadonlyt'");
          }
        }
      }
    }
  }
  catch(ex)
  {
    _DisplayError("��MulLine.js-->_checkBoxAll�����з����쳣:" + ex,this);
  }
}

/************************************************************
 *         ������ ʹѡ����е�checkBox���ѡ�е�״̬
 *���룺          �кţ���1��ʼ
 *�����          ���ѡ�У�����true�����򷵻�false
 ************************************************************
 */
function _CheckBoxSel(row,cObj)
{
  if(this.canChk==0)
  {
    alert("no checkBox!");
    return;
  }
  var i=0,iMax=0;
  var rowNo=row;
  iMax=this.mulLineCount;

  if(rowNo>iMax||rowNo<=0)
  {
    alert("�����кų�����Χ");
    return ;
  }

  try
  {
    if(this.mulLineCount==1)
    {
      _ResumeState();
      try
      {
        eval( this.formName + ".all('Inp" + this.instanceName + "Chk').value=1");
        eval( this.formName + ".all('" + this.instanceName + "Chk').checked=true");
      }
      catch(ex)
      {
        eval( this.formName + ".all('Inp" + this.instanceName + "Chk')[0].value=1");
        eval( this.formName + ".all('" + this.instanceName + "Chk')[0].checked=true");
      }
    }
    else
    {
      eval( this.formName + ".all('Inp" + this.instanceName + "Chk')[" + (rowNo-1) + "].value=1");
      eval( this.formName + ".all('" + this.instanceName + "Chk')[" + (rowNo-1) + "].checked=true");
    }
  }
  catch(ex)
  {
    _DisplayError("��MulLine.js-->_CheckBoxSel�����з����쳣:" + ex,this);
  }
}


/************************************************************
 *������ ʹѡ����е�radioBox���ѡ�е�״̬
 *���룺          �кţ���1��ʼ
 *�����
 ************************************************************
 */
function _RadioBoxSel(row,cObj)
{
  if(this.canSel==0)
  {
    alert("No RadioBox!");
    return;
  }
  var i=0,iMax=0;
  var rowNo=row;
  iMax=this.mulLineCount;

  if(rowNo>iMax||rowNo<=0)
  {
    alert("�����кų�����Χ");
    return ;
  }

  try
  {
    if(this.mulLineCount==1)
    {
      _ResumeState();
      try
      {
        eval( this.formName + ".all('Inp" + this.instanceName + "Sel').value=1");
        eval( this.formName + ".all('" + this.instanceName + "Sel').checked=true");
      }
      catch(ex)
      {
        eval( this.formName + ".all('Inp" + this.instanceName + "Sel')[0].value=1");
        eval( this.formName + ".all('" + this.instanceName + "Sel')[0].checked=true");
      }
    }
    else
    {
      eval( this.formName + ".all('Inp" + this.instanceName + "Sel')[" + (rowNo-1) + "].value=1");
      eval( this.formName + ".all('" + this.instanceName + "Sel')[" + (rowNo-1) + "].checked=true");
    }
  }
  catch(ex)
  {
    _DisplayError("��MulLine.js-->_RadioBoxSel�����з����쳣:" + ex,this);
  }
}


function _CheckBoxSelM(row,cObj)
{
  if(this.canSel==0)
  {
    alert("no checkBox!");
    return;
  }
  var i=0,iMax=0;
  var rowNo=row;
  iMax=this.mulLineCount;

  if(rowNo>iMax||rowNo<=0)
  {
    alert("�����кų�����Χ");
    return ;
  }
  try
  {
    if(this.mulLineCount==1)
    {
      _ResumeState();
      try
      {
        eval( this.formName + ".all('Inp" + this.instanceName + "Sel').value=1");
        eval( this.formName + ".all('" + this.instanceName + "Sel').checked=true");
      }
      catch(ex)
      {
        eval( this.formName + ".all('Inp" + this.instanceName + "Sel')[0].value=1");
        eval( this.formName + ".all('" + this.instanceName + "Sel')[0].checked=true");
      }
    }
    else
    {
      eval( this.formName + ".all('Inp" + this.instanceName + "Sel')[" + (rowNo-1) + "].value=1");
      eval( this.formName + ".all('" + this.instanceName + "Sel')[" + (rowNo-1) + "].checked=true");
    }
  }
  catch(ex)
  {
    _DisplayError("��MulLine.js-->_CheckBoxSel�����з����쳣:" + ex,this);
  }
}
/************************************************************
 * ������ ѡ������checkBox�� ��canChk��������á��ڲ���:����checkFlag�����ж���ѡ�������л��ǳ�������ѡ�С�  
 *���룺          
 *�����          
 ************************************************************
*/
function _CheckAll(cObjInstance,fieldCount)
{
  var tObjInstance;
  //alert(cObjInstance.formName);

  if (cObjInstance==null)
    tObjInstance=this;
  else
    tObjInstance=cObjInstance;

  if(tObjInstance.canChk==0)
  {
    alert("no checkBox!");
    return;
  }
  if(eval(this.formName + ".all('checkAll"+this.instanceName+"').checked==true"))
  {
    this.checkBoxAll(this,fieldCount);
    this.checkFlag=1;
  }
  else
  {
    this.checkBoxAllNot(this,fieldCount);
    this.checkFlag=0;
  }
  /*
   if(tObjInstance.checkFlag==0)        
   {
    tObjInstance.checkBoxAll();
    tObjInstance.checkFlag=1;
   }
   else
   {
    tObjInstance.checkBoxAllNot();
    tObjInstance.checkFlag=0;         
   }
  */
}

/************************************************************
 *         ������ ʹ�����е�checkBox���û��ѡ�е�״̬
 *���룺          ��
 *�����          ���ѡ�У�����true�����򷵻�false
 ************************************************************
 */
function _CheckBoxAllNot(cObj,colcount)
{
  var fieldCount=colcount;
  if(this.canChk==0)
  {
    alert("no checkBox!");
    return;
  }

  var i=0,iMax=0;
  iMax=this.mulLineCount;
  var ele = document.getElementById("span"+this.instanceName);
	ele.setAttribute("PageNo","");
  try
  {
    try
    {
      eval( this.formName + ".all('checkAll"+this.instanceName+"').value=0");
      eval( this.formName + ".all('checkAll"+this.instanceName+"').checked=false");
    }
    catch(ex)
    {
      alert("error->_CheckBoxAllNot");
    }
    if(this.mulLineCount==1)
    {
      _ResumeState();
      try
      {
        eval( this.formName + ".all('Inp" + this.instanceName + "Chk').value=0");
        eval( this.formName + ".all('" + this.instanceName + "Chk').checked=false");
        eval( this.formName + ".all('" + this.instanceName +"Chk').className='mulreadonlyt'");
        eval( this.formName + ".all('" + this.instanceName +"No').className='mulreadonlyt'");
        for(j=1;j<fieldCount;j++)
        {
          if( eval( this.formName + ".all('" + this.instanceName +j+"').className=='code8'")||eval( this.formName + ".all('" + this.instanceName +j+"').className=='codeselect'"))
          {
            eval( this.formName + ".all('" + this.instanceName +j+"').className='code8'");
          }
          else
          {
            eval( this.formName + ".all('" + this.instanceName +j+"').className='mulreadonlyt'");
          }
        }
      }
      catch(ex)
      {
        eval( this.formName + ".all('Inp" + this.instanceName + "Chk')[0].value=0");
        eval( this.formName + ".all('" + this.instanceName + "Chk')[0].checked=false");
      }
    }
    else
    {
      for(i=0;i<iMax;i++)
      {
        eval( this.formName + ".all('Inp" + this.instanceName + "Chk')[" + i + "].value=0");
        eval( this.formName + ".all('" + this.instanceName + "Chk')[" + i + "].checked=false");
        eval( this.formName + ".all('" + this.instanceName +"Chk')[" + i + "].className='mulreadonlyt'");
        eval( this.formName + ".all('" + this.instanceName +"No')[" + i + "].className='mulreadonlyt'");
        for(j=1;j<fieldCount;j++)
        {
          if( eval( this.formName + ".all('" + this.instanceName +j+"')[" + i + "].className=='code8'")||eval( this.formName + ".all('" + this.instanceName +j+"')[" + i + "].className=='codeselect'"))
          {
            eval( this.formName + ".all('" + this.instanceName +j+"')[" + i + "].className='code8'");
          }
          else
          {
            eval( this.formName + ".all('" + this.instanceName +j+"')[" + i + "].className='mulreadonlyt'");
          }
        }
      }

    }
  }
  catch(ex)
  {
    _DisplayError("��MulLine.js-->_checkBoxAllNot�����з����쳣:" + ex,this);
  }
}
/************************************************************
 *            ������ ��ʾ�����������   
 *���룺          ����������
 *�����          û��
 ************************************************************
 */
function _LoadMulLine(arrCols)
{
  //������ģ�浽this.mulLineText��
  //���ñ��⵽this.mulLineTextTitle��
  this.arraySave=arrCols;

  _SetFieldValue(this.instanceName,arrCols,this);
  //  alert("instanceName :"+this.instanceName);
  _LoadPage(this.instanceName,this);
}
/**
 * ��������ʾ����������󣬲��ö��е�ģʽ
 * ���룺���������飬װ�����ݵĶ���
 */
function _LoadMulLineArr(arrCols,cData)
{
	this.arraySave=arrCols;	//������������Ϣ
	//������ģ�浽this.mulLineText��
	//���ñ��⵽this.mulLineTextTitle��
	_SetFieldValue(this.instanceName,arrCols,this);
	//ת������
	_LoadPageArr(this.instanceName,this,cData);
}
/************************************************************
 *                ���������ݴ�������飬�γ�ÿ���������ģ��
 *��ά�����ʽ���������п������ֵ�����Ƿ��ܹ�����
 *
 ************************************************************
 */
function _SetFieldValue( strPageName, iArray,cObjInstance)
{
  var text="";
  var textTitle = "";
  cObjInstance.errorString = "" ;

  var boxWidth=20; //radioBox ��checkBox ����Ŀ��
  var userWidth=0; //�û�������п��ܺ�
  var rate=1/cObjInstance.mulLineNum;      //����body��Ⱥ��û������ȵı���
  //alert(rate);
  var fieldCount = iArray.length;
  //�����е���Ŀ
  cObjInstance.colCount = fieldCount;

  var i =0;

  var status="";
  //�ж��Ƿ����ɾ��/���� button
  //����û���ʼ��ѡ�����,��ôģ����Ҳ��֮�仯
  if(cObjInstance.locked==1)
    status="disabled";


  try
  {

    if ( fieldCount > 0 )
    {
      //����������
      var tempText0 = iArray[0][0] ;    //�����е�����
      var tempText1 = iArray[0][1] ;    //�����п�
      var tempText2 = iArray[0][2] ;    //�������������ֵ
      var tempText4 = iArray[0][3] ;    //�������Ƿ���������
      var tempText5 = "";
      var tempText6 = "";
      var tempText7 = "";
      var tempText8 = "";
      var tempText9 = "";
      var tempText10= "";
      var tempText11= "";
      var tempText12= "";
      var tempText13= "";
      var tempText14= "";
      var tempText15= "";
      var tempText16= "";
      var tempText17= "";
      var tempText18= "";
      var tempText19= "";
      var tempText20= "";
      var tempText21= "";   //���õ�ǰ���Ƿ���ʾʱ���ñ���ת���ֵĺ���������setRowColData����
      var tempText22= "";   //��ǰ�е����ݵ��ֶ�������setRowColDataByName �� getRowColDataByName ������ʹ��

      //qulq 2007-12-25 ��ӽڵ㽫���������̨��ʹ��̨����ʹ��������ȡ��ֵ�����ͺ��������ϡ�
      var colname ="";
      //��ʼ���������еĹ�ϵ
      for(var col=0;col<fieldCount;col++)
      {
      	if(iArray[col][21]!=null&&iArray[col][21]!="")
      	{
      		colname = iArray[col][21]+"@"+col+"|";
      	}
      }
      text="<input name ='ColName"+cObjInstance.instanceName+"' style='display: none' value ='"+colname+"'> ";
      if (cObjInstance.tableWidth=="")
      {
        text      = text + "  <table class=muline border=0 CELLSPACING=0 CELLPADDING=0 >";
        textTitle = textTitle + "  <table class=muline border=0 CELLSPACING=0 CELLPADDING=0 >";
      }
      else
      {
        text      = text + "  <table class=muline ALIGN=center border=0 CELLSPACING=0 CELLPADDING=0 style=\"width:"+cObjInstance.tableWidth+"\">";
        textTitle = textTitle + "  <table class=muline ALIGN=center border=0 CELLSPACING=0 CELLPADDING=1 style=\"width:"+cObjInstance.tableWidth+"\">";
      }

      text      = text + "    <tr aline=left> ";
      textTitle = textTitle + "    <tr aline=left>";

      if (cObjInstance.canSel==1)
      {
        userWidth=userWidth+parseInt(boxWidth);//����radioBox��
        if(cObjInstance.selBoxEventFuncName!=null&&cObjInstance.selBoxEventFuncName!="")
        {
          text = text + "<td class=muline style='width:"+boxWidth+"' >";
          text = text + "<input type='hidden' name='Inp"+ strPageName +"Sel' value='0'><input class=mulcommon style='width:"+boxWidth+"' type=radio name=" + strPageName + "Sel onclick=\" " + cObjInstance.instanceName + ".radioClick(this,"+fieldCount+");" +cObjInstance.selBoxEventFuncName+"('span$PageName$$SpanId$','"+cObjInstance.selBoxEventFuncParm+"');\"";

          text = text + "</td>";
          textTitle = textTitle + "<td class=mulinetitle style='width:"+boxWidth+"' > ";
          textTitle = textTitle + "<input class=mulinetitle  tabindex=-1 readonly style='width:"+boxWidth+"'>";
          textTitle = textTitle + "</td>";
        }
        else
        {
          text = text + "<td class=muline style='width:"+boxWidth+"' >";
          text = text + "<input type='hidden' name='Inp"+ strPageName +"Sel' value='0'><input class=mulcommon style='width:"+boxWidth+"' type=radio name=" + strPageName + "Sel onclick=\"return " + cObjInstance.instanceName + ".radioClick(this,"+fieldCount+");\"";

          text = text + "</td>";
          textTitle = textTitle + "<td class=mulinetitle style='width:"+boxWidth+"' > ";
          textTitle = textTitle + "<input class=mulinetitle  tabindex=-1 readonly style='width:"+boxWidth+"'>";
          textTitle = textTitle + "</td>";
        }
      }

      if (cObjInstance.canChk==1)
      {
        userWidth=userWidth+parseInt(boxWidth); //����checkBox��

        if(cObjInstance.chkBoxAllEventFuncName!=null&&cObjInstance.chkBoxAllEventFuncName!="")
        {
          textTitle = textTitle + "<td class=mulinetitle style='width:"+boxWidth+"' > ";
          textTitle = textTitle + "<input class=title  type=checkbox name='checkAll"+cObjInstance.instanceName+"' onclick=\" " + cObjInstance.instanceName +".checkAll(this,"+fieldCount+");"+cObjInstance.chkBoxAllEventFuncName+"(this.checked,this);\""+" style='width:"+boxWidth+"'>";
          textTitle = textTitle + "</td>";

        }
        else
        {
          textTitle = textTitle + "<td class=mulinetitle style='width:"+boxWidth+"' > ";
          textTitle = textTitle + "<input class=title  type=checkbox name='checkAll"+cObjInstance.instanceName+"' onclick=\" " + cObjInstance.instanceName +".checkAll(this,"+fieldCount+");\" style='width:"+boxWidth+"'>";
          textTitle = textTitle + "</td>";
        }


        if(cObjInstance.chkBoxEventFuncName!=null&&cObjInstance.chkBoxEventFuncName!="")
        {
          text = text + "<td class=muline style='width:"+boxWidth+"' >";
          text = text + "<input type='hidden' name='Inp"+ strPageName +"Chk' value='0'><input class=mulcommon style='width:"+boxWidth+"' type=checkbox name=" + strPageName + "Chk onclick=\""+ cObjInstance.instanceName + ".checkBoxClick(this,"+fieldCount+");" +cObjInstance.chkBoxEventFuncName+"('span$PageName$$SpanId$','"+cObjInstance.chkBoxEventFuncParm+"');\"";
          text = text + "</td>";

        }
        else
        {  //CheckBox����Ӧ�ⲿ�ĺ���
          text = text + "<td class=muline style='width:"+boxWidth+"' >";
          text = text + "<input type='hidden' name='Inp"+ strPageName +"Chk' value='0'><input class=mulcommon style='width:"+boxWidth+"' type=checkbox name=" + strPageName + "Chk onclick=\"return " + cObjInstance.instanceName + ".checkBoxClick(this,"+fieldCount+");\"";
          text = text + "</td>";
        }
        //alert(textTitle);

      }

      tempText1 = replace(tempText1,"px"," ");//�����ȼ���px��λ���滻
      tempText1 = replace(tempText1,"PX"," ");//�����ȼ���px��λ���滻
      tempText1 = trim(tempText1);
      userWidth=userWidth+parseInt(tempText1);//���������п�

      text      = text + "      <td class=muline style=\"width:" + tempText1 + "\"> ";
      textTitle = textTitle + "      <td class=mulinetitle style=\"width:" + tempText1 + "\" > "
                  +  "<input class=mulinetitle  readonly tabindex=-1 value = '" + tempText0 + "' style='width:" + tempText1 + "'>";

      text      = text + "        <input class=mulreadonly tabindex=-1 name=" + strPageName + "No "+isReadOnly(tempText4)+" maxlength="
                  + tempText2 + " style='width:" + tempText1 + "' onclick=\"return " + cObjInstance.instanceName + ".detailClick(this);\" title='"+cObjInstance.detailInfo+"'> ";

      text      = text + "      </td>";
      textTitle = textTitle + "      </td>";

      for ( i =1 ; i<fieldCount ; i++)
      {
        tempText1 = iArray[i][1] ;    //�����п�
        tempText1 = replace(tempText1,"px"," ");//�����ȼ���px��λ���滻
        tempText1 = replace(tempText1,"PX"," ");//�����ȼ���px��λ���滻
        tempText1 = trim(tempText1);
        userWidth=userWidth+parseInt(tempText1);//���ϸ����п�
      }
      //      alert(userWidth);

      //if(cObjInstance.hiddenSubtraction==0)
      // {userWidth=userWidth+30; }//�������һ��"-"�Ŀ��
      //      alert("�û����õ��ܿ�ȣ�"+userWidth);
      //      alert("��Ļ��ȣ�"+cObjInstance.windowWidth);
      userWidth=userWidth+40;     //���ӿ��
      if(userWidth<cObjInstance.windowWidth)
      {
        rate=(cObjInstance.windowWidth/userWidth)/cObjInstance.mulLineNum;
      }
      //      alert("����"+rate);

      for ( i =1 ; i<fieldCount ; i++)
      {
        tempText0 = iArray[i][0] ;    //�����е�����
        tempText1 = iArray[i][1] ;    //�����п�
        tempText2 = iArray[i][2] ;    //�������������ֵ
        tempText4 = iArray[i][3] ;    //�������Ƿ���������,���أ�����ѡ��
        tempText5 = iArray[i][4] ;    //��������(���ݴӺ�̨���ݿ�ȡ)--������
        tempText6 = iArray[i][5] ;    //�������ö�Ӧ�Ķ��� (���ݴӺ�̨���ݿ�ȡ)
        tempText7 = iArray[i][6] ;    //�������ö�Ӧ�Ķ��е��ڲ�ֵ(���ݴӺ�̨���ݿ�ȡ)
        tempText8 = iArray[i][7] ;    //��Ӧ���ⲿ��js�����������ǵ�ǰ�е�spanID,�㴫������飩
        tempText9 = iArray[i][8] ;    //��Ӧ���ⲿ��js�����ĵ�2������
        tempText10= iArray[i][9] ;    //��ʽУ��
        tempText11= iArray[i][10];    //��������(���ݴ�ǰ̨����)--������
        tempText12= iArray[i][11];    //��������(���ݴ�ǰ̨����)
        tempText13= iArray[i][12];    //��������(���ݴ�ǰ̨����)--���ж���
        tempText14= iArray[i][13];    //��������(���ݴ�ǰ̨����)
        tempText15= iArray[i][14];    //�û����ø��г���
        tempText16= iArray[i][15];    //���õ�ǰ�е�˫��������ʾ�����������ؼ����е�����
        tempText17= iArray[i][16];    //���õ�ǰ�е�˫��������ʾ�����������ؼ���ֵ
        tempText18= iArray[i][17];    //���õ�ǰ�е�˫��������ʾ�����������е�ֵ
        tempText19= iArray[i][18];    //���õ�ǰ�е�˫���µ�������������Ŀ�ȣ�רΪcodeSelect�������:��8��������
        tempText20= iArray[i][19];    //���õ�ǰ�е�˫����ǿ��ˢ��codeSelect����Դ��רΪcodeSelect�������:��7��������
        tempText21= iArray[i][20];    //�˴����ã�����setRowColData�������жϸò������Ƿ񽫱���תΪ���ģ���
        tempText22= iArray[i][21];    //��ǰ�е����ݵ��ֶ�������setRowColDataByName �� getRowColDataByName ������ʹ��

        //this.arraySave2[i-1]=new Array();

        try
        {
          if(tempText19==undefined)
            tempText19=null;
          if(tempText20==undefined)
            tempText20=null;
          if(tempText21==undefined)
            tempText21=null;
        }
        catch(ex)
        {
          tempText19=null;
          tempText20=null;
          tempText21=null;
        }

        if(tempText21=='1')
        {
          //this.arraySave2[i][0]='1';//���б�����ʾΪ����
          //this.arraySave2[i][1]=tempText5;//����������õı��룬�����Ҫת������
        }
        else
        {
          //this.arraySave2[i][0]='0';//���б��벻��ʾΪ����
        }


        if(tempText15==null||tempText15=="")
        {
          tempText15="";
        }
        tempText1 = replace(tempText1,"px"," ");
        tempText1 = replace(tempText1,"PX"," ");
        tempText1 = trim(tempText1);
        tempText1 = parseInt(tempText1)*rate; //��ʵ�ʿ�������û����Ŀ��


        if(tempText4=='3')
        {
          textTitle = textTitle + " <td class=mulinetitle style=\"display:'none'\"> ";

          text = text + "<td class=mulinetitle style=\"display:'none'\"><input name=" + strPageName + i + " type=hidden value='"+tempText15+"' "
                 + "  maxlength=" + tempText2 + "";
        }
        else
        {
          //if(cObjInstance.AllowSort=="True")
          //{
            textTitle = textTitle + " <td class=mulinetitle style=\"width:" + tempText1 + "\"> "
                        +  "<input class=mulinetitle  readonly tabindex=-1  value = "
                        + tempText0 + " style='cursor:hand;width :" + tempText1 + "' onclick='"+cObjInstance.allowsort+"("+strPageName+","+i+");'  >";
          //}
          //else
          //{
          //  textTitle = textTitle + " <td class=mulinetitle style=\"width:" + tempText1 + "\"> "
          //              +  "<input class=mulinetitle  readonly tabindex=-1  value = "
          //              + tempText0 + " style='width :" + tempText1 + "'  onmouseover=_showtitle(this); >";
          //}
          text      = text + "<td class=muline style=\"width:"+ tempText1 + "\" > <input name= "
                      + strPageName + i + " value='"+tempText15+"' "
                      + isReadOnly(tempText4)+" class=" + isReadOnlyClass(tempText4)
                      + " maxlength=" + tempText2 + " onmouseover=_showtitle(this); ";
        }
        if (tempText5==null || tempText5=="")
        {
          if(tempText8!=null&&tempText8!="") //������ã���ô��ʹ���Լ���д��javaScript������.js�ļ��� ,����������ǵ�ǰ�е�spanID��
            text      = text +" ondblclick=\""+tempText8+"('span$PageName$$SpanId$',"+tempText9+")"+";\"";
        }
        else
        {
          if(tempText6==null || tempText6==""||tempText7==null||tempText7=="")//�����������ֻӦ����1����
          {
            if(tempText16==null|| tempText16=="")//��������������ؼ��������ж�
            {

              text      = text +" ondblclick=\"return showCodeList('" + tempText5 + "',[this],null,null,null,null,"+tempText20+","+tempText19+");\"";
              text      = text +" onkeyup=\"return showCodeListKey('"+tempText5+"',[this],null,null,null,null,"+tempText20+","+tempText19+");\"";

            }
            else
            {
              if(tempText17!=null&&tempText17!="")//������������ռ��ֵ���ж�
              {
                text      = text +" ondblclick=\"return showCodeList('" + tempText5 + "',[this],null,null,'"+tempText17+"','"+tempText16+"',"+tempText20+","+tempText19+");\"";
                text      = text +" onkeyup=\"return showCodeListKey('"+tempText5+"',[this],null,null,'"+tempText17+"','"+tempText16+"',"+tempText20+","+tempText19+");\"";
              }
              else
              {
                if(tempText18!=null&&tempText18!="")//������������е�ֵ���ж�
                {
                  var tempValue="[";
                  arrText18=tempText18.split(FIELDDELIMITER);
                  for(var m=0;m<arrText18.length;m++)
                  {
                    tempValue=tempValue+cObjInstance.formName+".all('span$PageName$$SpanId$')"+".all('"+"$PageName$"+arrText18[m]+"').value";
                    if(m!=arrText18.length-1)
                      tempValue=tempValue+",";
                  }
                  tempValue=tempValue+"]";
                  text      = text +" ondblclick=\"return showCodeList('" + tempText5 + "',[this],null,null,"+tempValue+",'"+tempText16+"',"+tempText20+","+tempText19+");\"";
                  text      = text +" onkeyup=\"return showCodeListKey('"+tempText5+"',[this],null,null,"+tempValue+",'"+tempText16+"',"+tempText20+","+tempText19+");\"";
                }
              }
            }
          }
          else    //�����������Ӧ���ڶ�����
          {
            var arrColName="["; //��Ӧ�еļ��ϵĸ�ʽ
            var arrCodeName="["; //��Ӧ����ѡ����������
            //�ָ����飬�õ���Ӧ����������
            var arrayField=tempText6.split(FIELDDELIMITER);
            var arrayCode =tempText7.split(FIELDDELIMITER);
            //��ʽ������ѡ������ �� 0|1 ת��[0,1]
            for(var m=0;m<arrayCode.length;m++)
            {
              arrCodeName=arrCodeName+arrayCode[m];
              if(m!=arrayCode.length-1)
                arrCodeName=arrCodeName+",";
            }
            arrCodeName=arrCodeName+"]";
            //��ʽ���ж������� ��0|1 ת��[�ж����ж���]
            for(var n=0;n<arrayField.length;n++)
            {
              //arrColName=fm.all('spanXXXID').all('XXX+Col') ����ӦspanID���ж���
              arrColName=arrColName+cObjInstance.formName+".all('span$PageName$$SpanId$')"+".all('"+"$PageName$"+ arrayField[n]+"')";
              if(n!=arrayField.length-1)
                arrColName=arrColName+"," ;
            }
            arrColName=arrColName+"]";
            if(tempText16==null|| tempText16=="")//��������������ؼ��������ж�
            {
              text  = text +" ondblclick=\"return showCodeList('" + tempText5 + "',"+arrColName+","+arrCodeName+",null,null,null,"+tempText20+","+tempText19+");\"";
              text  = text +" onkeyup=\"return showCodeListKey('" + tempText5 + "',"+arrColName+","+arrCodeName+",null,null,null,"+tempText20+","+tempText19+");\"";
            }
            else
            {

              if(tempText17!=null&&tempText17!="")//������������ռ��ֵ���ж�
              {
                text  = text +" ondblclick=\"return showCodeList('" + tempText5 + "',"+arrColName+","+arrCodeName+",null,'"+tempText17+"','"+tempText16+"',"+tempText20+","+tempText19+");\"";
                text  = text +" onkeyup=\"return showCodeListKey('" + tempText5 + "',"+arrColName+","+arrCodeName+",null,'"+tempText17+"','"+tempText16+"',"+tempText20+","+tempText19+");\"";
              }
              else
              {
                if(tempText18!=null&&tempText18!="")//������������е�ֵ���ж�
                {
                  var tempValue="[";
                  arrText18=tempText18.split(FIELDDELIMITER);
                  for(var m=0;m<arrText18.length;m++)
                  {
                    tempValue=tempValue+cObjInstance.formName+".all('span$PageName$$SpanId$')"+".all('"+"$PageName$"+arrText18[m]+"').value";
                    if(m!=arrText18.length-1)
                      tempValue=tempValue+",";
                  }
                  tempValue=tempValue+"]";
                  text  = text +" ondblclick=\"return showCodeList('" + tempText5 + "',"+arrColName+","+arrCodeName+",null,"+tempValue+",'"+tempText16+"',"+tempText20+","+tempText19+");\"";
                  text  = text +" onkeyup=\"return showCodeListKey('" + tempText5 + "',"+arrColName+","+arrCodeName+",null,"+tempValue+",'"+tempText16+"',"+tempText20+","+tempText19+");\"";
                }
              }
            }
          } //��Ӧelse
        } //��Ӧelse

        //���ǰ��������5,6,7,8,9���ǿգ���ô�жϵ�10����������Ƿ����
        if((tempText5==null || tempText5=="")&&(tempText6==null || tempText6=="")&&(tempText7==null || tempText7=="")&&(tempText8==null || tempText8=="")&&(tempText9==null || tempText9==""))
        {
          if(tempText12!=null && tempText12!="" && tempText11!=null && tempText11!="")
          {
            if(tempText13==null || tempText13=="" || tempText14==null || tempText14=="")
            {//ֻ��Ӧ��ǰ���д���ѡ��
              text  = text +" CodeData='"+tempText12+"' ondblClick=\"showCodeListEx('"+tempText11+"',[this],null,null,null,null,"+tempText20+","+tempText19+");\" ";
              text  = text +" onkeyup=\"showCodeListKeyEx('"+tempText11+"',[this],null,null,null,null,"+tempText20+","+tempText19+");\" ";
            }
            else
            {//��Ӧ���л��߲��ǵ�ǰ�д���ѡ��
              var arrColName="["; //��Ӧ�еļ��ϵĸ�ʽ
              var arrCodeName="["; //��Ӧ����ѡ����������
              //�ָ����飬�õ���Ӧ����������
              var arrayField=tempText13.split(FIELDDELIMITER);
              var arrayCode =tempText14.split(FIELDDELIMITER);
              //��ʽ������ѡ������ �� 0|1 ת��[0,1]
              for(var m=0;m<arrayCode.length;m++)
              {
                arrCodeName=arrCodeName+arrayCode[m];
                if(m!=arrayCode.length-1)
                  arrCodeName=arrCodeName+",";
              }
              arrCodeName=arrCodeName+"]";
              //��ʽ���ж������� ��0|1 ת��[�ж����ж���]
              for(var n=0;n<arrayField.length;n++)
              {
                //arrColName=fm.all('spanXXXID').all('XXX+Col') ����ӦspanID���ж���
                arrColName=arrColName+cObjInstance.formName+".all('span$PageName$$SpanId$')"+".all('"+"$PageName$"+ arrayField[n]+"')";
                if(n!=arrayField.length-1)
                  arrColName=arrColName+"," ;
              }
              arrColName=arrColName+"]";
              text  = text +" CodeData='"+tempText12+"' ondblclick=\"return showCodeListEx('" + tempText11 + "',"+arrColName+","+arrCodeName+",null,null,null,"+tempText20+","+tempText19+");\"";
              text  = text +" onkeyup=\"return showCodeListKeyEx('" + tempText11 + "',"+arrColName+","+arrCodeName+",null,null,null,"+tempText20+","+tempText19+");\"";
            }
            //alert("text  = "+text);
          }
        }
        if(tempText10!=null && tempText10!="")//�����ҪУ��
          textTitle = textTitle + "<input type=hidden name="+strPageName+"verify"+i+"  value = '" + tempText10 + "' >";
        else
          textTitle = textTitle + "<input type=hidden name="+strPageName+"verify"+i+"  value ='' >";

        text      = text + "          onkeyup='return " + cObjInstance.instanceName + ".keyUp(\"$PageName$\");'";
        text      = text + "          style='width:" + tempText1 + "'>";

        text      = text + "      </td>";
        textTitle = textTitle + " </td>";

      }
      if(cObjInstance.hiddenSubtraction==0)//������ؼ���"-"�ı�־=0����ô��ʾ����������
      {
        text        = text + "      <td class=muline width=15>";
        textTitle   = textTitle + "      <td class=mulinetitle width=15> <input class=mulinetitle disabled readonly  value = '-' style='width :15' ></td>";
        //��ע�⣬�������еĸ�ʽ�ǲ�������Ķ��ģ�����_Lock(),UnLock()�����������
        //����Ķ��������У�������޸�_Lock(),UnLock()��������ز���
        text = text + "        <input class=button type=button "+status+" value='-' name='$PageName$Del' tabindex=-1 ";
        //�����Ҫ���-����Ӧ�ⲿ����
        if(cObjInstance.delEventFuncName!=null&&cObjInstance.delEventFuncName!="")
        {
          text = text + " onclick=' " + cObjInstance.instanceName + ".deleteOne(\"$PageName$\",span$PageName$$SpanId$);";
          +cObjInstance.delEventFuncName+"('span$PageName$$SpanId$','"+cObjInstance.delEventFuncParm+"') ;'>";
        }
        else
        {
          text = text + " onclick='return " + cObjInstance.instanceName + ".deleteOne(\"$PageName$\",span$PageName$$SpanId$);'>";
        }

        //-----------------------------------------------------------------------
        text        = text + "  <input  type=hidden name=$PageName$SpanID value=span$PageName$$SpanId$ > ";
        //-----------------------------------------------------------------------
        text        = text + "      </td>";
      }
      else
      {

        text        = text + "      <td class=muline width=15 style='display:none' >";
        textTitle   = textTitle + "      <td class=mulinetitle width=15 style='display:none' > <input class=mulinetitle  type=hidden readonly  value = '-' style='width :15' ></td>";
        //��ע�⣬�������еĸ�ʽ�ǲ�������Ķ��ģ�����_Lock(),UnLock()�����������
        //����Ķ��������У�������޸�_Lock(),UnLock()��������ز���0
        text        = text + "        <input class=button type=button "+status+" value='-' name='$PageName$Del' style='display:none'";
        text        = text + "          onclick='return " + cObjInstance.instanceName + ".deleteOne(\"$PageName$\",span$PageName$$SpanId$);'>";
        //-----------------------------------------------------------------------
        text        = text + "  <input  type=hidden name=$PageName$SpanID value=span$PageName$$SpanId$ > ";
        //-----------------------------------------------------------------------
        text        = text + "      </td>";

      }

      text        = text + "    </tr>";
      textTitle   = textTitle + "    </tr>";
      text        = text + "  </table>";
      textTitle   = textTitle + "  </table>";

    }
    cObjInstance.mulLineText=text;                    //������
    cObjInstance.mulLineTextTitle = textTitle;        //�б���
    //   alert("text:"+text);
    //   alert("textTitle:"+textTitle);
  }
  catch(ex)
  {
    _DisplayError("��MulLine.js-->_SetFieldValue�����з����쳣:" + ex,cObjInstance);
  }
}

/**
 * �����������������ĳ�ʼ������������װ������ģʽ
 */
function _LoadPage(strPageName,cObjInstance)
{
	var t_StrPageName = strPageName||this.instanceName;	//ʵ������
	var tHTML="";
	cObjInstance.errorString="";
	var tStatus="";
	//�ж��Ƿ����ɾ��/���� button
	//����û���ʼ��ѡ�����,��ôģ����Ҳ��֮�仯
	if(cObjInstance.locked==1)
	{
		tStatus="disabled";
	}
	if (cObjInstance.displayTitle==1)
	{
		tHTML+=cObjInstance.mulLineTextTitle;
	}
	tHTML+="<span id='span"+t_StrPageName+"Field'></span>";
	if(cObjInstance.hiddenPlus==0)
	{
		//������һ�б�־"+"������
		tHTML+="<div align=left>";
		if(cObjInstance.addEventFuncName!=null&&cObjInstance.addEventFuncName!="")
		{
			tHTML+="<input class=button type=button name='"+t_StrPageName+"addOne' value='+' "+tStatus+" onclick=\" "+cObjInstance.instanceName+".addOne('"+t_StrPageName+"'); "+cObjInstance.instanceName+".moveFocus(); "+cObjInstance.addEventFuncName+"('span$PageName$$SpanId$','"+cObjInstance.addEventFuncParm+"');\">";
		}
		else
		{
			tHTML+="<input type=button class=button name='"+t_StrPageName+"addOne' value='+' "+tStatus+" onclick=\" "+cObjInstance.instanceName+".addOne('"+t_StrPageName+"'); "+cObjInstance.instanceName+".moveFocus();\">";
		}
		tHTML+="</div>";
	}
	else
	{
		//�������һ�б�־"+"
		tHTML+="<div align=left><input type=button class=button style='display:none' name='"+t_StrPageName+"addOne' value='+' "+tStatus+" onclick=\" "+cObjInstance.instanceName+".addOne('"+t_StrPageName+"');"+cObjInstance.instanceName+".moveFocus();\"></div>";
	}
	try
	{
		document.all("span"+t_StrPageName).innerHTML=tHTML;
		_AddOne(cObjInstance.instanceName,cObjInstance.mulLineCount,cObjInstance);
	}
	catch(ex)
	{
		_DisplayError("��MulLine.js-->_LoadPage�����з����쳣:"+ex,cObjInstance);
	}
}
/**
 * �����������������ĳ�ʼ�������ö���װ������ģʽ
 */
function _LoadPageArr(strPageName,cObjInstance,cData)
{
	var t_StrPageName = strPageName||this.instanceName;	//ʵ������
	var tHTML="";
	cObjInstance.errorString="";
	var tStatus="";
	//�ж��Ƿ����ɾ��/���� button
	//����û���ʼ��ѡ�����,��ôģ����Ҳ��֮�仯
	if(cObjInstance.locked==1)
	{
		tStatus="disabled";
	}
	if (cObjInstance.displayTitle==1)
	{
		tHTML+=cObjInstance.mulLineTextTitle;
	}
	tHTML+="<span id='span"+t_StrPageName+"Field'></span>";
	if(cObjInstance.hiddenPlus==0)
	{
		//������һ�б�־"+"������
		tHTML+="<div align=left>";
		if(cObjInstance.addEventFuncName!=null&&cObjInstance.addEventFuncName!="")
		{
			tHTML+="<input class=button type=button name='"+t_StrPageName+"addOne' value='+' "+tStatus+" onclick=\" "+cObjInstance.instanceName+".addOne('"+t_StrPageName+"'); "+cObjInstance.instanceName+".moveFocus(); "+cObjInstance.addEventFuncName+"('span$PageName$$SpanId$','"+cObjInstance.addEventFuncParm+"');\">";
		}
		else
		{
			tHTML+="<input type=button class=button name='"+t_StrPageName+"addOne' value='+' "+tStatus+" onclick=\" "+cObjInstance.instanceName+".addOne('"+t_StrPageName+"'); "+cObjInstance.instanceName+".moveFocus();\">";
		}
		tHTML+="</div>";
	}
	else
	{
		//�������һ�б�־"+"
		tHTML+="<div align=left><input type=button class=button style='display:none' name='"+t_StrPageName+"addOne' value='+' "+tStatus+" onclick=\" "+cObjInstance.instanceName+".addOne('"+t_StrPageName+"');"+cObjInstance.instanceName+".moveFocus();\"></div>";
	}
	try
	{
		document.all("span"+t_StrPageName).innerHTML=tHTML;
		_AddOneArr(cObjInstance.instanceName,cObjInstance.mulLineCount,cObjInstance,cData);
	}
	catch(ex)
	{
		_DisplayError("��MulLine.js-->_LoadPage�����з����쳣:"+ex,cObjInstance);
	}
}

/**
 * ���������һ��(�ⲿ/�ڲ�����)
 */
function _AddOne(strPageName,intNumber,cObjInstance)
{
	var t_StrPageName = strPageName||this.instanceName;	//ʵ������
	var i,j;
	var strText;	//ÿ������
	var strFunctionName="";	//��ִ����addone����õĺ�����
	var spanID=-1;	//spanID���
	var intCount;	//��ӵ��и���
	var tObjInstance;	//����ָ��
	var isInit;	//�ж��Ƿ����ڳ�ʼ��������
	if (cObjInstance==null)
	{
		tObjInstance=this;
		isInit = false;
	}
	else
	{
		tObjInstance=cObjInstance;
		isInit = true;
	}
	tObjInstance.errorString="";
	(intNumber==null)?intCount=1:intCount=intNumber;	//�õ��еĸ���
	//�Ա�����ֵ
	strText = tObjInstance.mulLineText;
	spanID = tObjInstance.maxSpanID;
	try
	{
		//�õ�ԭ��������
		var strOldText=document.all("span"+t_StrPageName+"Field").innerHTML;
		//���intCount��
		for(i=1;i<=intCount;i++)
		{
			spanID++;
			tObjInstance.maxSpanID=spanID;
			strText = tObjInstance.mulLineText;
			strText = strText.replace(/\$PageName\$/g,t_StrPageName);
			strText = strText.replace(/\$SpanId\$/g,spanID);
			strText = "<span id='span"+t_StrPageName+spanID+"'>"+strText+"</span>";
			strOldText+=strText;
		}
		if (!isInit)
		{
			//����ǳ�ʼ���������Ѿ�ָ��
			tObjInstance.mulLineCount =tObjInstance.mulLineCount+intCount;
		}
		//���ر仯����ı�
		document.all("span"+t_StrPageName+"Field").innerHTML=strOldText;
//		fm.all('tt').value = strOldText;
		_ModifyCount(tObjInstance.formName,t_StrPageName,tObjInstance.mulLineCount,tObjInstance);	//���ú�����ΪstrFunctionName�ĺ���
	}
	catch(ex)
	{
		_DisplayError("��MulLine.js-->_AddOne�����з����쳣:"+ex,tObjInstance);
	}
}
/**
 * ��������Ӷ���(�ⲿ/�ڲ�����)
 */
function _AddOneArr(strPageName,intNumber,cObjInstance,cData)
{
	var t_StrPageName = strPageName||this.instanceName;	//ʵ������
	var i,j;
	var strText;	//ÿ������
	var strFunctionName="";	//��ִ����addone����õĺ�����
	var spanID=-1;	//spanID���
	var intCount;	//��ӵ��и���
	var tObjInstance;	//����ָ��
	var isInit;	//�ж��Ƿ����ڳ�ʼ��������
	if (cObjInstance==null)
	{
		tObjInstance=this;
		isInit = false;
	}
	else
	{
		tObjInstance=cObjInstance;
		isInit = true;
	}
	tObjInstance.errorString="";
	(intNumber==null)?intCount=1:intCount=intNumber;	//�õ��еĸ���
	//�Ա�����ֵ
	strText = tObjInstance.mulLineText;
	spanID = tObjInstance.maxSpanID;
	try
	{
		//�õ�ԭ��������
		var strOldText=document.all("span"+t_StrPageName+"Field").innerHTML;
		//���intCount��
		var i = 1;
		while (i <= intCount)
		{
			spanID++;
			tObjInstance.maxSpanID=spanID;
			strText = tObjInstance.mulLineText;
			strText = strText.replace(/\$PageName\$/g,t_StrPageName);
			strText = strText.replace(/\$SpanId\$/g,spanID);
			var j=0;
			var tLength = cData[i-1].length;
			while (j < tLength)
			{
				k=j+1;
				//��֤�����˳�����У��ҷ�ʽ�̶�������£��ſ��Բ��������ķ�ʽ�滻
				strText = strText.replace(t_StrPageName+k+" value=''",t_StrPageName+k+" value='"+cData[i-1][j]+"'");
				j++;
			}
			strText = "<span id='span"+t_StrPageName+spanID+"'>"+strText+"</span>";
			strOldText+=strText;
			i++;
		}
		if (!isInit)
		{
			//����ǳ�ʼ���������Ѿ�ָ��
			tObjInstance.mulLineCount =tObjInstance.mulLineCount+intCount;
		}
		//���ر仯����ı�
		document.all("span"+t_StrPageName+"Field").innerHTML=strOldText;
		_ModifyCount(tObjInstance.formName,t_StrPageName,tObjInstance.mulLineCount,tObjInstance);	//���ú�����ΪstrFunctionName�ĺ���
	}
	catch(ex)
	{
		_DisplayError("��MulLine.js-->_AddOne�����з����쳣:"+ex,tObjInstance);
	}
}

/************************************************************
 *                    ������ɾ��һ��(�ⲿ/�ڲ�����)
 *
 ************************************************************
 */
function _DeleteOne(strPageName,spanID,cObjInstance)
{
  var tStr;
  var t_StrPageName = strPageName||this.instanceName ;  //ʵ������
  var tObjInstance;         //����ָ��
  if (cObjInstance==null)
  {
    tObjInstance=this;
  }
  else
  {
    tObjInstance=cObjInstance;
    var spanName=spanID;
    spanID=eval(tObjInstance.formName+".all('" + spanName + "')");
  }
  //alert("_Del spanID="+spanID);

  tObjInstance.errorString="";

  var spanObj=eval(tObjInstance.formName+".all('span" + t_StrPageName  + "')");
  //alert(tObjInstance.formName+".all('span" + t_StrPageName  + "')");
  //alert("_Del spanObj="+spanObj);
  try
  {
    spanID.innerHTML="";
    tObjInstance.errorString="";
    tObjInstance.mulLineCount = tObjInstance.mulLineCount - 1 ;
    tStr="<SPAN id="+spanID.id+"></SPAN>";
    spanObj.innerHTML=spanObj.innerHTML.replace(tStr,"");
    //alert("_Del spanObj.innerHTML="+spanObj.innerHTML);
    _ModifyCount(tObjInstance.formName,t_StrPageName ,tObjInstance.mulLineCount,tObjInstance);
  }
  catch(ex)
  {
    _DisplayError("��MulLine.js-->_DeleteOne�����з����쳣:" + ex,tObjInstance);
  }
}

/************************************************************
 *               ��������Enter������һ��
 *
 ************************************************************
 */
function _KeyUp(strPageName)
{
  var t_StrPageName = strPageName||this.instanceName ;  //ʵ������
  if (( window.event.keyCode==40 ) || ( window.event.keyCode==13 ))
  {
    //this.addOne(t_StrPageName);

    //_MoveFocus(1);
  }
}

/************************************************************
 *               �������ƶ����㵽������
 *
 ************************************************************
 */
function _MoveFocus(Col,cObjInstance)
{
  var cCol;
  var tObjInstance;         //����ָ��
  if (cObjInstance==null||cObjInstance=='')
    tObjInstance=this;
  else
    tObjInstance=cObjInstance;

  tObjInstance.errorString="";

  cRow=tObjInstance.mulLineCount-1;//�кŴ�0��ʼ

  if(Col==""||Col==null)
  {
    cCol = 1;
  }
  else
    cCol=Col;
  try
  {
    tObjInstance.setFocus(cRow,cCol,tObjInstance);
  }
  catch(ex)
  {
    _DisplayError("��MulLine.js-->_MoveFocus�����з����쳣:" + ex,tObjInstance);
  }

}

/************************************************************
 *               �������õ�������Ϣ
 *
 ************************************************************
 */
function _GetErrStr()
{
  return this.errorString;
}

/**
 * �������޸�������Ϣ(�ڲ�����)
 */
function _ModifyCount(iFormName,iStrPageName,iCount,cObjInstance)
{
	var t_StrPageName = iStrPageName||this.instanceName;	//ʵ������
	//ÿ�γ�ʼ��������ϵ�ʱ����Ҫ��PageNo������г�ʼ�����Ǻǣ������ȽϺõ�˵
	var ele = document.getElementById("span"+t_StrPageName);
	ele.setAttribute("PageNo","");
	var tObjInstance;	//����ָ��
	if (cObjInstance==null)
	{
		tObjInstance=this;
	}
	else
	{
		tObjInstance=cObjInstance;
	}
	var i;
	var len = iCount;
	var No;
	try
	{
		//ע�⣬�����Ӧ_SetRowColData��������Ϊ
		if (iCount==1)
		{
			No=tObjInstance.recordNo+1;
			eval(iFormName+".all('"+t_StrPageName+"No').value="+No );
		}
		else
		{
			if(!isNaN(len))
			{
				var i = 1;
				while (i<=len)
				{
					No=tObjInstance.recordNo+i;
					eval(iFormName+".all('"+t_StrPageName+"No')[i-1].value="+No );
					i++;
				}
			}
		}
	}
	catch(ex)
	{
		_DisplayError("��MulLine.js-->_ModifyCount�����з����쳣:"+ex,cObjInstance);
	}
}


/************************************************************
 *                    �������ж��Ƿ���ֻ������
 *���룺�������Ϊ0����������"readonly",���򷵻�""
 ************************************************************
 */
function isReadOnly(strReadOnly)
{
  var tempText ;
  if (strReadOnly=="0" )
  {
    tempText = "readonly tabindex=-1"     ;
  }
  else
  {
    tempText = ""             ;
  }

  return tempText;

}

/************************************************************
 *                �������ж���ʾ����
 *���룺�������Ϊ0����������"readonly",���򷵻�""
 ************************************************************
 */
function isReadOnlyClass(strReadOnly)
{
  var tempText ;
  if (strReadOnly=="0" )
  {
    tempText = "mulreadonly"     ;
  }
  else if (strReadOnly=="2")
  {
    tempText = "code8"         ;
  }
  else
  {
    tempText = "mulcommon"             ;
  }

  return tempText;

}
/************************************************************
 *               ��������ʾ��������Ĵ�����Ϣ
 *���룺          strError ��Ҫ��ʾ�Ĵ�����Ϣ
 *               cObj     ʵ��ָ��
 *�����          û��
 ************************************************************
 */
function _DisplayError(strError,cObj)
{
  cObj.errorString=strError;
  alert(strError);
}

/************************************************************
 *               �õ�ָ�����е�����(�ⲿ/�ڲ�����)
 *���룺          cRow:  ��
 *                fieldName:  �ֶ���
 *                cObjInstance Muline�����ⲿ����ʱΪ�գ��ڲ�����ʱ����Ϊ��
 *                ��������һ�����ⲿ���ã���cObjInstanceΪ�գ��ڲ�tObjInstance=this;
 *                ������Ӻ���ʱ������ǰ����this��ΪcObjInstance������������Ӻ���   
 *�����          ָ���е��ƶ��ֶε�ֵ
 ************************************************************
 */
function _getRowColDataByName(row, fieldName, cObjInstance)
{
  if(cObjInstance == null)
  {
    cObjInstance = this;
  }

  for(var col = 0; col < this.arraySave.length; col++)
  {
    var tFieldName = this.arraySave[col][21];

    if(tFieldName != undefined && tFieldName != null
        && tFieldName != "" && tFieldName == fieldName)
    {
      return cObjInstance.getRowColData(row, col);
    }
  }
  
  return "";
}

/************************************************************
 *               �õ�ָ�����е�����(�ⲿ/�ڲ�����)
 *���룺          cRow:  ��
 *                cCol:  ��
 *                cObjInstance Muline�����ⲿ����ʱΪ�գ��ڲ�����ʱ����Ϊ��
 *                ��������һ�����ⲿ���ã���cObjInstanceΪ�գ��ڲ�tObjInstance=this;
 *                ������Ӻ���ʱ������ǰ����this��ΪcObjInstance������������Ӻ���   
 *�����          ָ���У��е�ֵ
 ************************************************************
 */
function _GetRowColData(cRow,cCol,cObjInstance)
{
  var tStr,tReturn;
  var tObjInstance;         //����ָ��
  if (cObjInstance==null)
    tObjInstance=this;
  else
    tObjInstance=cObjInstance;

  tObjInstance.errorString="";

  if(cRow<0||cRow>=tObjInstance.mulLineCount)
  {
    alert("��MulLine.js-->getRowColData() ��ָ���˴�����У�"+cRow);
    tReturn="";
    return trim(tReturn);
  }

  if(cCol<0||cCol>=tObjInstance.colCount)
  {
    alert("��MulLine.js-->getRowColData() ��ָ���˴�����У�"+cCol);
    tReturn="";
    return trim(tReturn);
  }

  try
  {
    //ע�⣺�������������ж������������ڳ�ʼ��Ϊ0��ʱ��������쳣
    if(tObjInstance.mulLineCount==1)
    {
      _ResumeState();
      try
      {
        tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+cCol+"').value";

        tReturn=eval(tStr);
      }
      catch(ex)
      {
        tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+cCol+"')[0].value";
        tReturn=eval(tStr);
      }
      //����õ���ֵΪnull����undefined��˵��������Ϊ1ʱ��������Ŀ��ܣ�
      //����ǴӶ���ɾ����һ�У���ô���ܻ������Ϊ�������һ��Ԫ�أ����Ի�Ҫ���±�
      //�������⣬������javaScript�л����������أ���ˣ����Կ����Ը��������������
      try
      {//��undefined���������������Ϊ�е�JS��֧��undefined������Ҫ��������
        if(tReturn==undefined)
        {
          try
          {
            tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+cCol+"')[0].value";
            tReturn=eval(tStr);
          }
          catch(ex)
          {
            tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+cCol+"').value";
            tReturn=eval(tStr);
          }
      }
    }
      catch(ex)
      {}
      if(tReturn==null)
      {
        try
        {
          tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+cCol+"')[0].value";
          tReturn=eval(tStr);
        }
        catch(ex)
        {
          tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+cCol+"').value";
          tReturn=eval(tStr);
        }
      }
      //��ʹͨ�������ת�������Ǵ���©��������ֵ��Ȼ������null����undefined
      //��˶Դ���ȥ��ֵӦ�����ж��Ƿ�null����undefined
    }
  }
  catch(ex)
  {}

  try
  {
    if(tObjInstance.mulLineCount>1)
    {
      tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+cCol+"')["+cRow+"].value";
      tReturn=eval(tStr);
      //alert("more eval="+eval(tStr));
    }
  }
  catch(ex)
  {
    _DisplayError("��MulLine.js-->_GetRowColData�����з����쳣:" + ex,tObjInstance);
  }

  //ͨ��ת������Ȼ��������ֵ����javascript������ص��в������Ϊ��ȫ�Ա��������֤

  try
  {//��undefined���������������Ϊ�е�JS��֧��undefined������Ҫ��������
    if(tReturn==undefined)
      tReturn="";
  }
  catch(ex)
  {}

  try
  {
    if(tReturn==null)
      tReturn="";
  }
  catch(ex)
  {
    tReturn="";
  }

  return trim(tReturn);

}

/************************************************************
 *               �õ�ָ���е�����(�ⲿ/�ڲ�����)
 *���룺          cRow:  ��
 *                cObjInstance Muline�����ⲿ����ʱΪ�գ��ڲ�����ʱ����Ϊ��
 *                ��������һ�����ⲿ���ã���cObjInstanceΪ�գ��ڲ�tObjInstance=this;
 *                ������Ӻ���ʱ������ǰ����this��ΪcObjInstance������������Ӻ���   
 *�����          ���ظ��е�����
 ************************************************************
 */
function _GetRowData(cRow,cObjInstance)
{
  var tStr,tReturn,n,cCol;
  var tObjInstance;         //����ָ��
  if (cObjInstance==null)
    tObjInstance=this;
  else
    tObjInstance=cObjInstance;

  tObjInstance.errorString="";

  if(cRow<0||cRow>=tObjInstance.mulLineCount)
  {
    alert("��MulLine.js-->getRowColData() ��ָ���˴�����У�"+cRow);
    tReturn="";
    return trim(tReturn);
  }

  var iArray = new Array();//���ص�����

  for(n=1;n<tObjInstance.colCount;n++)
  {
    cCol=n;
    try
    {
      //ע�⣺�������������ж������������ڳ�ʼ��Ϊ0��ʱ��������쳣
      if(tObjInstance.mulLineCount==1)
      {
        _ResumeState();
        try
        {
          tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+cCol+"').value";
          tReturn=eval(tStr);
        }
        catch(ex)
        {
          tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+cCol+"')[0].value";
          tReturn=eval(tStr);
        }
        //����õ���ֵΪnull����undefined��˵��������Ϊ1ʱ��������Ŀ��ܣ�
        //����ǴӶ���ɾ����һ�У���ô���ܻ������Ϊ�������һ��Ԫ�أ����Ի�Ҫ���±�
        //�������⣬������javaScript�л����������أ���ˣ����Կ����Ը��������������
        try
        {//��undefined���������������Ϊ�е�JS��֧��undefined������Ҫ��������
          if(tReturn==undefined)
            try
            {
              tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+cCol+"')[0].value";
              tReturn=eval(tStr);
            }
            catch(ex)
            {
              tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+cCol+"').value";
              tReturn=eval(tStr);
            }
        }
        catch(ex)
        {}
        if(tReturn==null)
        {
          try
          {
            tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+cCol+"')[0].value";
            tReturn=eval(tStr);
          }
          catch(ex)
          {
            tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+cCol+"').value";
            tReturn=eval(tStr);
          }
        }
        //��ʹͨ�������ת�������Ǵ���©��������ֵ��Ȼ������null����undefined
        //��˶Դ���ȥ��ֵӦ�����ж��Ƿ�null����undefined
      }
    }
    catch(ex)
    {}

    try
    {
      if(tObjInstance.mulLineCount>1)
      {
        tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+cCol+"')["+cRow+"].value";
        tReturn=eval(tStr);
        //alert("more eval="+eval(tStr));
      }
    }
    catch(ex)
    {
      _DisplayError("��MulLine.js-->_GetRowColData�����з����쳣:" + ex,tObjInstance);
      return;
    }

    //ͨ��ת������Ȼ��������ֵ����javascript������ص��в������Ϊ��ȫ�Ա��������֤

    try
    {//��undefined���������������Ϊ�е�JS��֧��undefined������Ҫ��������
      if(tReturn==undefined)
        tReturn="";
    }
    catch(ex)
    {}

    try
    {
      if(tReturn==null)
        tReturn="";
    }
    catch(ex)
    {
      tReturn="";
    }

    iArray[n-1]=trim(tReturn);
  }//end for
  return iArray;
}

/************************************************************
 *               ����ָ�����е�����(�ⲿ/�ڲ�����)
 *���룺         cRow:  ��
 *               fieldName:  �ֶ���
 *               cData: ����
 *               cObjInstance Muline�����ⲿ����ʱΪ�գ��ڲ�����ʱ����Ϊ��
 *                ��������һ�����ⲿ���ã���cObjInstanceΪ�գ��ڲ�tObjInstance=this;
 *                ������Ӻ���ʱ������ǰ����this��ΪcObjInstance������������Ӻ���   
 *�����          û��
 ************************************************************
 */
function _setRowColDataByName(row, fieldName, cData, cObjInstance)
{
  if(cObjInstance == null)
  {
    cObjInstance = this;
  }

  for(var col = 0; col < this.arraySave.length; col++)
  {
    var tFieldName = this.arraySave[col][21];

    if(tFieldName != undefined && tFieldName != null
        && tFieldName != "" && tFieldName == fieldName)
    {
      cObjInstance.setRowColData(row, col, cData);
    }
  }
}

/************************************************************
 *               ����ָ�����е�����(�ⲿ/�ڲ�����)
 *���룺         cRow:  ��
 *               cCol:  ��
 *               cData: ����
 *               cObjInstance Muline�����ⲿ����ʱΪ�գ��ڲ�����ʱ����Ϊ��
 *                ��������һ�����ⲿ���ã���cObjInstanceΪ�գ��ڲ�tObjInstance=this;
 *                ������Ӻ���ʱ������ǰ����this��ΪcObjInstance������������Ӻ���   
 *�����          û��
 ************************************************************
 */
function _SetRowColData(cRow,cCol,cData,cObjInstance)
{
  var tStr;
  var tObj;
  var tReturn=false;

  var tObjInstance;         //����ָ��
  if (cObjInstance==null)
    tObjInstance=this;
  else
    tObjInstance=cObjInstance;

  tObjInstance.errorString="";

  if(cData==null)
    cData="";

  if(cRow<0||cRow>=tObjInstance.mulLineCount)
  {
    alert("��MulLine.js-->setRowColData() ʱָ���˴������:"+cRow);
    return tReturn;
  }

  if(cCol<0||cCol>=tObjInstance.colCount)
  {
    alert("��MulLine.js-->setRowColData() ʱָ���˴������:"+cCol);
    return tReturn;
  }

  try
  {
  	var newData=cData.replace("\r\n","");
    newData = newData.replace("'","��");
    //ע�⣺�������������ж������������ڳ�ʼ��Ϊ0��ʱ��������쳣
    if(tObjInstance.mulLineCount==1)
    {
      _ResumeState();
      try
      {
        tStr=tObjInstance.formName + ".all('" + tObjInstance.instanceName+cCol + "').value='"+newData +"'";
       
       
        eval(tObjInstance.formName + ".all('" + tObjInstance.instanceName+cCol + "').setAttribute('name','" + tObjInstance.instanceName+cCol + "')");
        
        eval(tStr);
       
      }
      catch(ex)
      {
        tStr=tObjInstance.formName + ".all('" + tObjInstance.instanceName+cCol + "')[0].value='"+newData +"'";
        eval(tStr);
      }
    }
    else
    	{
      if(tObjInstance.mulLineCount>1)
      {
        tStr=tObjInstance.formName + ".all('" + tObjInstance.instanceName+cCol + "')["+cRow+"].value='"+newData +"'";
    eval(tStr );
       }
      }

    tReturn=true;
  }
  catch(ex)
  {
    _DisplayError("��MulLine.js-->_SetRowColData�����з����쳣:" + ex,tObjInstance);
  }
  return tReturn;
}

/************************************************************
 *                ���Muline������(���ⲿ/�ڲ�����)
 *���룺          strPageName:  ҳ����span�����������ַ���
 *                cObjInstance Muline�����ⲿ����ʱΪ�գ��ڲ�����ʱ����Ϊ��
 *                ��������һ�����ⲿ���ã���cObjInstanceΪ�գ��ڲ�tObjInstance=this;
 *                ������ֺ���ʱ������ǰ����this��ΪcObjInstance������������Ӻ���   
 *�����          û��
 ************************************************************
 */
function _ClearData(strPageName,cObjInstance)
{


  var t_StrPageName = strPageName||this.instanceName ;  //ʵ������


  var strNewText="";

  var tObjInstance;         //����ָ��
  if (cObjInstance==null)
    tObjInstance=this;
  else
    tObjInstance=cObjInstance;

  tObjInstance.errorString="";

  try
  {
    document.all("span"+t_StrPageName+"Field").innerHTML=strNewText;
    tObjInstance.mulLineCount = 0;
    tObjInstance.maxSpanID = -1;
    try
    {
      if(tObjInstance.checkFlag==1&&tObjInstance.canChk==1)
      {
        tObjInstance.checkFlag=0;
        eval( tObjInstance.formName + ".all('checkAll"+tObjInstance.instanceName+"').checked=false");
      }
    }
    catch(ex)
    {}
  }
  catch(ex)
  {
    _DisplayError("��MulLine.js-->_clearData�����з����쳣:" + ex,tObjInstance);
  }
}

/************************************************************
 *                ��Muline�Ŀհ����崦(�����ⲿ/�ڲ�����)
 *���룺          strPageName:ҳ����Muline�Ķ�����������Ϊ��
 *                cObjInstance Muline�����ⲿ����ʱΪ�գ��ڲ�����ʱ����Ϊ��
 *                ��������һ�����ⲿ���ã���cObjInstanceΪ�գ��ڲ�tObjInstance=this;
 *                ������ֺ���ʱ������ǰ����this��ΪcObjInstance������������Ӻ���   
 *�����          û��
 ************************************************************
 */
function _DelBlankLine(strPageName,cObjInstance)
{
  var t_StrPageName = strPageName||this.instanceName ;  //ʵ������

  var tObjInstance;
  if (cObjInstance==null)
    tObjInstance=this;
  else
    tObjInstance=cObjInstance;

  tObjInstance.errorString="";

  var rowCount = tObjInstance.mulLineCount;//����
  var colCount = tObjInstance.colCount;        //����

  var i,j;
  var blankFlag=true; //���б�־
  var lineSpanID;     //�е�spanID
  var data="";
  try
  {
    //ѭ����ѯÿһ���Ƿ�Ϊ����,�����е�ÿһ�ж�Ϊ�գ�����0�У�����У�
    for(i=0;i<rowCount;i++)//���п�ʼѭ��,0�п�ʼ
    {

      for(j=1;j<colCount;j++)    //���п�ʼѭ����1�п�ʼ
      {
        data = _GetRowColData(i,j,tObjInstance);
        if(data!=null&&data!="")//�����Ϊ�գ����б�־��Ϊfalse
        {
          blankFlag=false;
          break;
        }
      }
      if(blankFlag)
      {
        lineSpanID=_FindSpanID(i,tObjInstance);  //�õ����е�spanID
        //alert("lineSpanID="+lineSpanID);
        _DeleteOne(t_StrPageName,lineSpanID,tObjInstance); //ɾ����һ��
        //ɾ��һ�У�ѭ����һ
        rowCount=rowCount-1;
        //����һ�м��
        i=i-1;
      }
      blankFlag=true;
    }
    try
    {
      if(tObjInstance.checkFlag==1&&tObjInstance.canChk==1)
      {
        tObjInstance.checkFlag=0;
        eval( tObjInstance.formName + ".all('checkAll"+tObjInstance.instanceName+"').checked=false");
      }
    }
    catch(ex)
    {}

  }
  catch(ex)
  {
    _DisplayError("��MulLine.js-->_DelBlankLine�����з����쳣:" + ex,tObjInstance);
  }

}


/************************************************************
 *                ��Muline��ѡ�������(�����ⲿ/�ڲ�����)
 *���룺          strPageName:ҳ����Muline�Ķ�����������Ϊ��
 *                cObjInstance Muline�����ⲿ����ʱΪ�գ��ڲ�����ʱ����Ϊ��
 *                ��������һ�����ⲿ���ã���cObjInstanceΪ�գ��ڲ�tObjInstance=this;
 *                ������ֺ���ʱ������ǰ����this��ΪcObjInstance������������Ӻ���   
 *�����          û��
 ************************************************************
 */
function _DelCheckTrueLine(strPageName,cObjInstance)
{
  var t_StrPageName = strPageName||this.instanceName ;  //ʵ������

  var tObjInstance;
  if (cObjInstance==null)
    tObjInstance=this;
  else
    tObjInstance=cObjInstance;

  tObjInstance.errorString="";

  var rowCount = tObjInstance.mulLineCount;//����
  var i;
  var checkTrueFlag=true; //ѡ���б�־
  var lineSpanID;     //�е�spanID

  if(tObjInstance.canChk==0)
  {
    alert("no checkBox!");
    return;
  }
  try
  {
    //ѭ����ѯÿһ���Ƿ�Ϊ����,�����е�ÿһ�ж�Ϊ�գ�����0�У�����У�
    for(i=0;i<rowCount;i++)//���п�ʼѭ��,0�п�ʼ
    {

      checkTrueFlag= _GetChkNo(i,tObjInstance);
      //--alert("checkTrueFlag="+checkTrueFlag);

      if(checkTrueFlag)
      {
        lineSpanID=_FindSpanID(i,tObjInstance);  //�õ����е�spanID
        //alert("lineSpanID="+lineSpanID);
        _DeleteOne(t_StrPageName,lineSpanID,tObjInstance); //ɾ����һ��
        //ɾ��һ�У�ѭ����һ
        rowCount=rowCount-1;
        //����һ�м��
        i=i-1;
      }
    }

    try
    {
      if(tObjInstance.checkFlag==1)
      {
        tObjInstance.checkFlag=0;
        eval( tObjInstance.formName + ".all('checkAll"+tObjInstance.instanceName+"').checked=false");
      }
    }
    catch(ex)
    {}

  }
  catch(ex)
  {
    _DisplayError("��MulLine.js-->_DelBlankLine�����з����쳣:" + ex,tObjInstance);
  }

}
/************************************************************
 *                ��Muline��ѡ�е�radiobox�����(�����ⲿ/�ڲ�����)
 *���룺          strPageName:ҳ����Muline�Ķ�����������Ϊ��
 *                cObjInstance Muline�����ⲿ����ʱΪ�գ��ڲ�����ʱ����Ϊ��
 *                ��������һ�����ⲿ���ã���cObjInstanceΪ�գ��ڲ�tObjInstance=this;
 *                ������ֺ���ʱ������ǰ����this��ΪcObjInstance������������Ӻ���   
 *�����          û��
 ************************************************************
 */
function _DelRadioTrueLine(strPageName,cObjInstance)
{
  var t_StrPageName = strPageName||this.instanceName ;  //ʵ������
  var tObjInstance;
  if (cObjInstance==null)
    tObjInstance=this;
  else
    tObjInstance=cObjInstance;

  tObjInstance.errorString="";
  var rowCount = tObjInstance.mulLineCount;//����
  var selno=0;        //ѡ�е�����
  var lineSpanID;     //�е�spanID

  if(tObjInstance.canSel==0)
  {
    alert("no radioBox!");
    return;
  }

  try
  {
    selno= _GetSelNo(tObjInstance);
    if(selno==0)
      selno=1;
    lineSpanID=_FindSpanID(selno-1,tObjInstance);  //�õ����е�spanID
    _DeleteOne(t_StrPageName,lineSpanID,tObjInstance); //ɾ����һ��

  }
  catch(ex)
  {
    _DisplayError("��MulLine.js-->_DelRadioTrueLine�����з����쳣:" + ex,tObjInstance);
  }

}


/************************************************************
 *                ����ָ���е�SpanID(���ⲿ/�ڲ�����)
 *���룺          cRow:  ָ��������
 *                cObjInstance Muline�����ⲿ����ʱΪ�գ��ڲ�����ʱ����Ϊ��
 *                ��������һ�����ⲿ���ã���cObjInstanceΪ�գ��ڲ�tObjInstance=this;
 *                ������ֺ���ʱ������ǰ����this��ΪcObjInstance������������Ӻ���   
 *�����          tReturn��ָ���е�spanֵ
 *��Ҫ˵��������ģ����ɾ��һ�еı�־"-"���棬������ص�INPUT����nameΪ
 *          this.instanceName+"SpanID'����valueΪ��Ӧ���е�spanֵ
 *          �õ����е�spanֵ�󣬴���_DeleteOne()��������������ɾ��
 *          Ŀ����Ϊ�˶�̬ɾ����������������У�ͨ��ѭ��ʵ��     
 ************************************************************
 */
function _FindSpanID(cRow,cObjInstance)
{
  var tStr;
  var tReturn="";
  var tObjInstance;
  if (cObjInstance==null)
    tObjInstance=this;
  else
    tObjInstance=cObjInstance;

  tObjInstance.errorString="";

  if(cRow<0||cRow>=tObjInstance.mulLineCount)
  {
    alert("��MulLine.js-->findSpanID() ʱָ���˴������:"+cRow);
    return tReturn;
  }
  try
  {
    //ע�⣺�������������ж������������ڳ�ʼ��Ϊ0��ʱ��������쳣
    if(tObjInstance.mulLineCount==1)
    {
      _ResumeState();
      try
      {
        tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+"SpanID').value";
        tReturn=eval(tStr);
      }
      catch(ex)
      {
        tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+"SpanID')[0].value";
        tReturn=eval(tStr);
      }
      //����õ���ֵΪnull��˵��������Ϊ1ʱ��������Ŀ��ܣ�
      //����ǴӶ���ɾ����һ�У���ô���ܻ������Ϊ����������������һ��Ԫ�أ����Ի�Ҫ���±�
      //�������⣬������javaScript�л����������أ���ˣ�������Կ����Ը��������������
      try
      {//��undefined���������������Ϊ�е�JS��֧��undefined������Ҫ��������
        if(tReturn==undefined)
          try
          {
            tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+"SpanID')[0].value";
            tReturn=eval(tStr);
          }
          catch(ex)
          {
            tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+"SpanID').value";
            tReturn=eval(tStr);
          }
      }
      catch(ex)
      {}

      if(tReturn==null)
      {
        try
        {
          tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+"SpanID')[0].value";
          tReturn=eval(tStr);
        }
        catch(ex)
        {
          tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+"SpanID').value";
          tReturn=eval(tStr);
        }
      }
    }
    else
      if(tObjInstance.mulLineCount>1)
      {
        tStr=tObjInstance.formName+".all('" +tObjInstance.instanceName+"SpanID')["+cRow+"].value";
        tReturn=eval(tStr);
      }
  }
  catch(ex)
  {
    _DisplayError("��MulLine.js-->_FindSpanID�����з����쳣:" + ex,tObjInstance);
  }
  return tReturn;
}


/************************************************************
 * �������������ֵ�Ƿ���Ϲ淶
 *���룺          ����Ϊ�գ��������  
 *�����          û��
 interpreting right by yuanaq
 ************************************************************/
function _CheckValue2(strPageName,cObjInstance)
{

  var t_StrPageName = strPageName||this.instanceName ;  //ʵ������

  var tObj = cObjInstance||this;
  _DelBlankLine(t_StrPageName,tObj); //�������

  var tRule="";
  var strInfo="";
  var rowNo=0;
  var tReturn;
  if(tObj.mulLineCount==0)
  {
    //alert("������");
    //return false;
    return true;
  }
  else if(tObj.mulLineCount==1)
  {
    for(var i=1;i<tObj.colCount;i++) //�ӵ�1�п�ʼ����0�������У�������
    {
      tRule=eval(tObj.formName+".all('"+t_StrPageName+"verify"+i+"').value");
      if(tRule==null||tRule=="")
        continue;
      else
      {
        try
        {
          strInfo="��һ�е�"+tRule;
          var dd=tObj.formName+"."+t_StrPageName+i;
          if(!verifyElementWrap2(strInfo, _GetRowColData(n,i,tObj),dd))
            return false;//������󣬷���
        }
        catch(ex)
        {
          alert("��ȷ��verifyInput.js �ļ������������ݿ���������");
          return false;
        }
      }
    }

  }
  else
  {
    for(var i=1;i<tObj.colCount;i++) //�ӵ�1�п�ʼ����0�������У�������
    {
      try
      { //ע��:��ʼ��ʱ�������������У���textTitle������verify=''
        //        alert(tObj.formName+".all('"+t_StrPageName+"verify"+i+"').value");
        tRule=eval(tObj.formName+".all('"+t_StrPageName+"verify"+i+"').value");
        if(tRule==null||tRule=="")
          continue; //����У��
        else
        {
          //            alert("��"+i+"�У�"+tRule);
          for(var n=0;n<tObj.mulLineCount;n++)
          {// �ⲿ��������쿴verifyInput.js parm1:λ��|������� parm2: Ҫ�����ֵ(����N��i�е�ֵ)
            try
            {
              rowNo=n+1;
              strInfo="��"+rowNo+"�е�"+tRule;   //��ʾ��Ϣ��ȷ���ڼ���
              //if(!verifyElement(strInfo,_GetRowColData(n,i,tObj)))
              var dd=tObj.formName+"."+t_StrPageName+i+"["+n+"]";
              if(!verifyElementWrap2(strInfo, _GetRowColData(n,i,tObj),dd))
                return false;//������󣬷���
            }
            catch(ex)
            {
              alert("��ȷ��verifyInput.js �ļ������������ݿ���������");
              return false;
            }
          }
        }
      }
      catch(ex)
      {
        alert("_CheckValue��������");
        return false;
      }
    }
  }
  return true;
}
/************************************************************
 * �������������ֵ�Ƿ���Ϲ淶
 *���룺          ����Ϊ�գ��������  
 *�����          û��
 ************************************************************/
function _CheckValue(strPageName,cObjInstance)
{

  var t_StrPageName = strPageName||this.instanceName ;  //ʵ������

  var tObj = cObjInstance||this;
  _DelBlankLine(t_StrPageName,tObj); //�������

  var tRule="";
  var strInfo="";
  var rowNo=0;
  var tReturn;
  if(tObj.mulLineCount==0)
  {
    //alert("������");
    //return false;
    return true;
  }
  for(var i=1;i<tObj.colCount;i++) //�ӵ�1�п�ʼ����0�������У�������
  {
    try
    { //ע��:��ʼ��ʱ�������������У���textTitle������verify=''
      //        alert(tObj.formName+".all('"+t_StrPageName+"verify"+i+"').value");
      tRule=eval(tObj.formName+".all('"+t_StrPageName+"verify"+i+"').value");
      if(tRule==null||tRule=="")
        continue; //����У��
      else
      {
        //            alert("��"+i+"�У�"+tRule);
        for(var n=0;n<tObj.mulLineCount;n++)
        {// �ⲿ��������쿴verifyInput.js parm1:λ��|������� parm2: Ҫ�����ֵ(����N��i�е�ֵ)
          try
          {
            rowNo=n+1;
            strInfo="��"+rowNo+"�е�"+tRule;   //��ʾ��Ϣ��ȷ���ڼ���
            if(!verifyElement(strInfo,_GetRowColData(n,i,tObj)))
              return false;//������󣬷���
          }
          catch(ex)
          {
            alert("��ȷ��verifyInput.js �ļ������������ݿ���������");
            return false;
          }
        }
      }
    }
    catch(ex)
    {
      alert("_CheckValue��������");
      return false;
    }
  }
  return true;
}


/************************************************************
 * ��������(�ڲ�����):�ú�������ȥ����������չ���������ӵĹ���
 * ��MulLine�Ӷ��м�����һ��ʱ���ٵ����ڲ�����
 * �ǻ����ġ����ܵ�ԭ���ǣ�������������ʽ��������һ��������ʽ
 * ���ɶ��б�ɵ��к��ֽ��ŵ����ڲ���������ʣ�µĵ��л����������
 * ��ʽ����[0]�����������ڲ��ж�ʱ��������=1����ֱ���ñ�����ʽ����
 * ����ִ��󡣸ú�������xxx.mulLineCount==1�󡣼����øö�����ڲ�
 * �������Ա��ٵ�����غ���ʱ���õ�����ʽ��Ϊ������ʽ
 *���룺          ����Ϊ�գ��������  
 *�����          û��
 ************************************************************/
function _ResumeState(cObjInstance)
{
  var tObjInstance;
  if (cObjInstance==null)
    tObjInstance=this;
  else
    tObjInstance=cObjInstance;

  tObjInstance.errorString="";

  tObjInstance.state=0;

}

/************************************************************
 * ����MulLine��ĳ��ĳ���Ƿ�õ�����
 *���룺          row �� ����Ϊ��
                  col �� ����Ϊ�գ�ȱʡ��Ϊ1����������ź�ĵ�һ�У�
                  cObjInstance MulLine�������Ϊ��  
 *�����          true or false 
 ************************************************************/
function _GetFocus(Row,Col,cObjInstance)
{
  //����
  var    tReturn = false;
  return tReturn;
}

/************************************************************
 * ����MulLine��ĳ��ĳ�еõ�����
 *���룺          row �� ����Ϊ��(������Ϊ���һ�е�����)
                  col �� ����Ϊ�գ�ȱʡ��Ϊ1����������ź�ĵ�һ�У�
                  cObjInstance (MulLine�������Ϊ�� ) 
 *�����          true or false 
 ************************************************************/
function _SetFocus(Row,Col,cObjInstance)
{

  var tStr;
  var tObj;
  var tReturn=false;
  var cRow;
  var cCol;
  var tObjInstance;         //����ָ��
  if (cObjInstance==null)
    tObjInstance=this;
  else
    tObjInstance=cObjInstance;

  tObjInstance.errorString="";


  cRow=Row;
  if(cRow<0||cRow>=tObjInstance.mulLineCount)
  {
    //alert("��MulLine.js-->_SetFocus() ʱָ���˴������:"+cRow);
    return tReturn;
  }

  if(Col==""||Col==null)
  {
    cCol = 1;
  }
  else
    cCol=Col;

  if(cCol<0||cCol>=tObjInstance.colCount)
  {
    //alert("��MulLine.js-->_SetFocus() ʱָ���˴������:"+cCol);
    return tReturn;
  }

  try
  {

    //ע�⣺�������������ж������������ڳ�ʼ��Ϊ0��ʱ��������쳣
	 
    if(tObjInstance.mulLineCount==1)
    {
    	
      _ResumeState();
     
     
      try
      {
        tStr=tObjInstance.formName + ".all('" + tObjInstance.instanceName+cCol + "')[0].focus()";
        alert("1");
      }
      catch(ex)
      {
        tStr=tObjInstance.formName + ".all('" + tObjInstance.instanceName+cCol + "')[0].focus()";
      }
    }
    else
      if(tObjInstance.mulLineCount>1)
        tStr=tObjInstance.formName + ".all('" + tObjInstance.instanceName+cCol + "')["+cRow+"].focus()";

    eval(tStr );
    eval(tStr );

    tReturn=true;
  }
  catch(ex)
  {
    _DisplayError("��MulLine.js-->_SetFocus�����з����쳣:" + ex,tObjInstance);
  }
  return tReturn;
}
/************************************************************
 * ���MulLine��ĳ�����ֳ�����ʾ��Χ������ʾtitle
 *���룺          �ؼ�ʵ��
 *�����          title 
 ************************************************************/
function _showtitle(obj)
{
  /*
      var twidth=obj.style.width;
      var tlength=0;
      var tvalue=obj.value;
      var i;
      twidth = replace(twidth,"px"," ");
      twidth = replace(twidth,"PX"," ");
      twidth = trim(twidth);
      twidth = parseInt(twidth)/7;   //һ���ִ�Լ7������
      for(i=0;i<tvalue.length;i++){
        if(chkzh(tvalue.charAt(i))){  //chkzh(char)������common.js��
                tlength+=2;
        }else{
          tlength+=1;
        }
      }
      if(twidth<tlength){
        obj.title =obj.value;
      }else{
        obj.title ="";
      } 
  */
  obj.title =obj.value;
}
function AllowSortFun(obj,i)
{
  var sortturnpage=obj.SortPage;
  if(sortturnpage==null||sortturnpage=="")
  {
    //alert("���Ȳ�ѯ��");
    return false ;
  }
  sortturnpage.allowsort(i);
}
/************************************************************
*	������	����ҳ����ʾ������ҳ����ת����Ӧҳ
*************************************************************/
function _SetPageMark(cTurnPage)
{
  var tStrPageName = this.instanceName;
  try
  {
    if(this.SortPage==null||this.SortPage=="")
    {
      return false;
    }
  }
  catch(ex)
  {
    alert(ex);
    return false;
  }

  var tTotalPageNum = Math.ceil(cTurnPage.queryAllRecordCount/cTurnPage.pageLineNum);
  var tPageIndex = cTurnPage.pageIndex+1;
  var innerHTML = document.all("span"+tStrPageName ).innerHTML;
  if(innerHTML==""||innerHTML==null)
    return;
  innerHTML += "<div align=right>";
  innerHTML += "��&nbsp;"+tPageIndex+"/"+tTotalPageNum+"&nbsp;ҳ&nbsp;&nbsp;";
  innerHTML += "ת��&nbsp;<input type='common' style='{border: 1px #9999CC solid;height: 18px}' name='GotoPage"+tStrPageName+"' size='3'>&nbsp;ҳ";

  innerHTML += "<input type='button' class=cssbutton value='->' onclick='"+tStrPageName+".SortPage.gotoPage(document.all.GotoPage"+tStrPageName+".value);try{afterGoToPage();}catch(ex){}'>";
  innerHTML += "</div>";

  document.all("span"+tStrPageName ).innerHTML = innerHTML;
}
function _SetMakeExcel(cTurnPage)
{
  var tStrPageName = this.instanceName;
  var tRecCout = cTurnPage.queryAllRecordCount;
  var innerHTML1 = document.all("span"+tStrPageName ).innerHTML;
  alert(innerHTML1);
  if(innerHTML1==""||innerHTML1==null)
    return;
  if(tRecCout==0)
  return;
  if (tRecCout>3000)
  return;
  var innerHTML="";
  //innerHTML += "<TD TYPE=READONLY WIDTH='5px'>   </TD><td>";
  innerHTML += "; CURSOR:hand\"  value='Down' onclick='turnPage.makeExcel();'";
  //innerHTML += "</td>";

  document.all("span"+tStrPageName ).innerHTML = innerHTML1.replace("\" tabIndex=-1 readOnly></TD>",innerHTML+" tabIndex=-1></TD>");
  alert (document.all("span"+tStrPageName ).innerHTML);
}
