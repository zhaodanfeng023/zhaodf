<%@page contentType="text/html;charset=GBK" %>

<html>
<head>
  <title>��Ϣ����</title>
   <%@page import="com.zjlife.venture.util.*"%>
  <%--ҳ����ʽ--%>
  <link rel="stylesheet" type="text/css" href="../css/Project.css">
<%
  String SUCCESS    = "S";  //�ɹ�
  String FAILURE    = "F";  //ʧ��
  String COMMON     = "C";  //һ����Ϣ

 String Picture    = request.getParameter("picture");
 
  String Content    = StrTool.unicodeToGBK(request.getParameter("content"));
 
  /*********************************************************************/    
  
  String strPicture ="";  
                               
%>

</head>
<body class="interface">
  <h1><center>ϵͳ��Ϣ</center></h1>
  <br>

<%
  if(Picture==null)
    Picture = COMMON;

  if(Picture.equalsIgnoreCase(SUCCESS)){
    strPicture ="success.gif";
 
    }
  else if (Picture.equalsIgnoreCase(FAILURE))
    strPicture ="failure.gif";
  else
    strPicture ="common.gif";
%>

<table>
  <td>
    <img src='../../images/<%=strPicture%>'>
  </td>
  <td class="common">
    <%=Content%>
  </td>
</table>

<table >
  <center>
  <table width=80%><tr><td align=left>
    <!--<table id=lpc bgcolor=blue><tr><td>&nbsp;</td></tr></table>-->
    
    </td></tr>
  </table>
  </center>
</table>

<%if (Content.indexOf("����") == -1) {%>
<center><input type=button class=common id=butSubmit value="ȷ ��" onclick="window.close()" tabIndex=0>
<%}%>
<script language=JavaScript>

ini = new Date().getTime();
var pc = 0;
//load();

function load() {
  pc += 1;
  lpc.style.width = pc + "%";
  time = setTimeout("load()",30);
  if (pc > 100) { 
    pc=0;
  }
}

function loaded() {
  fim = new Date().getTime();
  dif = fim - ini;
  ld.style.display = 'none';
  body.style.backgroundColor = 'silver';
  q.innerHTML = dif/1000;
  page.style.display = '';
}

function Show() {
  if (txt.style.display == "none") { txt.style.display = "" }
  else { txt.style.display = "none" }
}
// event.onAnyDoubt = "../js.htm";

try {
  window.butSubmit.focus();
} 
catch(e) {}

</script>

</body>
</html>