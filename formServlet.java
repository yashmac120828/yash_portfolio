package com.portfolio;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/formServlet")
public class formServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public formServlet() {
        super();
    }
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();
		try {
			String Name = request.getParameter("Name");
			String Email=request.getParameter("Email");
			String Query=request.getParameter("Query");
			int Review=Integer.parseInt(request.getParameter("Review"));
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/portfolio?useSSL=false&allowPublicKeyRetrieval=true","root","YAmysql@1412");
			String query= "insert into forms values(?,?,?,?)";
			PreparedStatement pstmt = con.prepareStatement(query);
			pstmt.setString(1, Name);
			pstmt.setString(2, Email);
			pstmt.setString(3,Query);
			pstmt.setInt(4, Review);
			pstmt.executeUpdate();
			if(pstmt!=null)pw.print("You are registerd succesfully");
			
			}
			catch(Exception e)
			{
				pw.print("<h2>Error found</h2>"+e.getMessage());
			}

	}

}
