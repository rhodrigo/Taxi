package br.uff.ic.taxi;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

public class Database {

	private Connection connection = null;
	private PreparedStatement preparedStatement = null;	
	private Timestamp start;
	private Timestamp end;
	
	public Database() {
		try {
			connect();
			System.out.println("Opened database successfully");			
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	private void connect() throws ClassNotFoundException, SQLException {
		Class.forName("org.postgresql.Driver");
		connection = DriverManager
				.getConnection("jdbc:postgresql://localhost:5432/postgres",
				"postgres", "viviso21");
		connection.setAutoCommit(false);
	}

	public List<Point> getListTaxi(Integer mapa, Config config) throws SQLException {
		Long intervalo = (config.getDataHoraFim().getTime() - config.getDataHoraInicio().getTime()) / config.getMapas();
		
		preparedStatement = connection.prepareStatement("SELECT latitude, longitude FROM \"MB\".\"Dados_local_Taxi\" WHERE "
				+ "ddd=? AND (meastime>=? AND meastime<=?) AND (latitude>=? AND latitude<=?) AND "
				+ "(longitude>=? AND longitude<=?);");
		
		preparedStatement.setString(1, String.valueOf(config.getDdd()));				
		start = new Timestamp(config.getDataHoraInicio().getTime()+(intervalo*mapa));
		preparedStatement.setTimestamp(2, start);
		if (mapa==(config.getMapas()-1)) {
			end = config.getDataHoraFim();
		} else {
			end = new Timestamp(config.getDataHoraInicio().getTime()+(intervalo*(mapa+1)));
		}
		preparedStatement.setTimestamp(3, end);
		preparedStatement.setBigDecimal(4, config.getLatitudeMin());
		preparedStatement.setBigDecimal(5, config.getLatitudeMax());
		preparedStatement.setBigDecimal(6, config.getLongitudeMin());
		preparedStatement.setBigDecimal(7, config.getLongitudeMax());
		ResultSet rs = preparedStatement.executeQuery();
		List<Point> list = new ArrayList<Point>();
		while (rs.next()) {
			list.add(new Point(rs.getBigDecimal("latitude"), rs.getBigDecimal("longitude")));
		}
		preparedStatement.close();
		return list;
	}

	public void close() {
		try {
			connection.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public Timestamp getStart() {
		return start;
	}

	public void setStart(Timestamp start) {
		this.start = start;
	}

	public Timestamp getEnd() {
		return end;
	}

	public void setEnd(Timestamp end) {
		this.end = end;
	}

}
