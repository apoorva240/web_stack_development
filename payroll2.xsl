<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/payroll_management">
<html>
<body style="color:blue">
<h1>Payroll Management System</h1>

<table border="1">
<tr>
<td>Name</td>
<td>Salary</td>
<td>Department</td>
<td>email</td>
<td>Contact</td>
<td>doj</td>
</tr>
<xsl:for-each select="payroll">
<xsl:sort select="empname"/>
<tr>
<td><xsl:value-of select="empname"/></td>
<td>
<xsl:choose>
<xsl:when test="salary &gt; 15000">
<xsl:value-of select="salary"/>
</xsl:when>
<xsl:otherwise>
<h6>salary to be increased</h6>
</xsl:otherwise>
</xsl:choose>
<xsl:if test="salary &gt; 15000">
<h4>salary OK</h4>
</xsl:if>
</td>
<td><xsl:value-of select="dept"/>
</td>
<td><xsl:value-of select="email"/></td>
<td><xsl:value-of select="phno"/>

</td>
<td><xsl:value-of select="doj"/></td>
</tr>
</xsl:for-each>
</table>
<xsl:apply-templates />
</body>
</html>
</xsl:template>


</xsl:stylesheet>
