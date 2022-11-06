import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 40,
    backgroundColor: '#2F2B2B',
    flexDirection: 'row'
  },
  footer: {
    padding: 10,
    backgroundColor: '#2F2B2B',
    flexDirection: 'row'
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 23,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: '#fff',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  gameinfo: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
    marginBottom: 30,
  },
  gamestatus: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 18,
    marginTop: 30
  },
  points_sum: {
    marginTop: 30,
    fontSize: 20,
  },
  points_bonus: {
    marginTop: 10,
    fontSize: 15,
  },
  item: {
    margin: 15,
    padding: 5
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    marginTop: 40,
    marginBottom: 10,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#BF0404",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#fff",
    fontSize: 20
  }
});