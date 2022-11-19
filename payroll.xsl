<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/payroll_management">

	<html>
	
		<body>
			<h2> Employee List </h2>
			<table border="1">
				<tr bgcolor="lightblue">
					<th> Name </th>
					<th> Salary </th>
                    <th>Department</th>
				</tr>
				<xsl:for-each select="payroll">
				<tr>
					<td><xsl:value-of select="empname" /></td>
					<td><xsl:value-of select="salary" /></td>
                    <td><xsl:value-of select="dept" /></td>
				</tr>
				</xsl:for-each>
			</table>
		</body>
	
	
	</html>

</xsl:template>

</xsl:stylesheet>
