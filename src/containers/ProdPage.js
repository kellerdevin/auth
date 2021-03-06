import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Animated,
  Dimensions
} from 'react-native'
import { connect } from 'react-redux'
import { Auth } from 'aws-amplify'
import api from '../util/routes/api'

import { colors, fonts } from '../theme'
const { width, height } = Dimensions.get('window')

class ProdPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      blockinfo: '',
      prodTitle: '',
      subTitle: '',
      prodimg: '',
      RAP1T: '',
      RAP1ST: '',
      RAP1img: '',
      RAP2T: '',
      RAP2ST: '',
      RAP2img: '',
      RAP3T: '',
      RAP3ST: '',
      RAP3img: '',
    }
  }

  componentDidMount() {
    api.twoApi().then((res) => {
      this.setState({
        blockinfo: res.blockinfo,
        avatar: res.avatar,
        prodTitle: res.prodTitle,
        subTitle: res.subTitle,
        prodimg: res.prodimg,
        RAP1T: res.RAP1T,
        RAP1ST: res.RAP1ST,
        RAP1img: res.RAP1img,
        RAP2T: res.RAP2T,
        RAP2ST: res.RAP2ST,
        RAP2img: res.RAP2img,
        RAP3T: res.RAP3T,
        RAP3ST: res.RAP3ST,
        RAP3img: res.RAP3img,
      })
    })
      .catch((error) => {
        console.error(error)
      })
  }


  static navigationOptions = {
    header: null
  }
  state = {
    username: ''
  }
  navigate() {
    this.props.navigation.navigate('Route1')
  }
  render() {
    return (   
      <View style={{ backgroundColor: 'white' }}>
      <View style={{ width: 500, height: 40, backgroundColor: 'white' }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.header, styles.all,]}>Wallet                             {'\n'}
            <Text style={[styles.hash, styles.all]}>
              {this.state.blockinfo}
              <Text style={[styles.copy]}>
                COPY
              </Text>
              <Text>                              </Text>
            </Text>
          </Text>
        </View>
        <View style={{ width: 500, height: 1, backgroundColor: 'gray' }} />

        <View style={{ width: 500, height: 5, backgroundColor: 'white' }} />
        <Text style={[styles.blue, styles.newProd, styles.all]}>NEW PRODUCT</Text>
        <Text style={[styles.prodTitle, styles.all]}>{this.state.prodTitle}</Text>
        <Text style={[styles.subTitle, styles.gray, styles.all]}>{this.state.subTitle}</Text>
        <Image
          style={{
            width: 250,
            height: 250,
            alignSelf: 'center',
            paddingBottom: 5,
          }}
          source={{ uri: 'https://a.1stdibscdn.com/archivesE/upload/1121189/v_34701811510039784334/3470181_master.jpg?width=500' }}
        />
        <View style={{ width: 500, height: 1, backgroundColor: 'gray', }} />
        <View style={{ width: 500, height: 10, backgroundColor: 'white' }} />
        <Text style={[styles.recentAdd, styles.bold, styles.all]}>Recent Additions

           <Text style={[styles.seeAll, styles.blue,]}>                         See All</Text>
          <View style={{ width: 500, height: 5, backgroundColor: 'white' }} />
        </Text>
        <View style={{ flexDirection: "row", }}>
          <View>
            <Image
              style={styles.rA}
              source={{ url: this.state.RAP1img }}
            />
          </View>
          <Text style={[styles.rat]}>
            {'\n'}{this.state.RAP1T}{'\n'}
            <Text style={[styles.rast,]}>
              {this.state.RAP1ST}          <Text style={[styles.views]}>   View    </Text>{'\n'}
              {'\n'} {'\n'}
              <View style={{ width: 500, height: 1, backgroundColor: 'grey' }} />
            </Text>
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>

          <Image
            style={styles.rA}
            source={{ url: this.state.RAP2img }}
          />
          <Text style={[styles.rat]}>
            {'\n'} {this.state.RAP2T}                    {'\n'}
            <Text style={[styles.rast,]}>
              {this.state.RAP2ST}          <Text style={[styles.views]}>   View    </Text>{'\n'}
              {'\n'} {'\n'}
              <View style={{ width: 500, height: 1, backgroundColor: 'grey' }} />
            </Text>
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>

          <Image
            style={styles.rA}
            source={{ url: this.state.RAP3img }}
          />
          <Text style={[styles.rat]}>
            {'\n'}Louis Vuitton / Supreme {'\n'}
            <Text style={[styles.rast]}>
              Christopher Backpack PM        <Text style={[styles.views]}>   View    </Text>{'\n'}
              {'\n'} {'\n'}
              <View style={{ width: 500, height: 1, backgroundColor: 'grey' }} />
            </Text>
          </Text>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  all: {
    marginLeft: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  hash: {
    fontSize: 15,
  },
  gray: {
    color: 'dimgray',
  },
  blue: {
    color: 'blue',
  },
  newProd: {
    fontSize: 15,
  },
  prodTitle: {
    fontSize: 26,
  },
  subTitle: {
    fontSize: 21,
  },
  recentAdd: {
    fontSize: 21,
    paddingLeft: 10,
  },
  seeAll: {
    fontSize: 16,
    textAlign: 'right',
    fontWeight: 'normal',
  },
  rA: {
    width: 100,
    height: 100,
    paddingBottom: 1,
  },
  rat: {
    fontSize: 21,
  },
  rast: {
    fontSize: 19,
    color: 'dimgrey',
  },
  copy: {
    color: 'blue',
    fontSize: 13,
    backgroundColor: 'whitesmoke',
    fontWeight: 'bold'
  },
  views: {
    color: 'blue',
    backgroundColor: 'whitesmoke',
    textAlign: 'right',
    fontWeight: 'bold',
    flex: 1,
    flexDirection: 'column',
    margin: 30,
    marginTop: 560,
    backgroundColor: 'whitesmoke',
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },

  bold: {
    fontWeight: 'bold',
  },
  hash: {
    fontSize: 10,
  },
  gray: {
    color: 'dimgray',
  },
  blue: {
    color: 'blue',
  },
  newProd: {
    fontSize: 10,
  },
  prodTitle: {
    fontSize: 23
  },
  subTitle: {
    fontSize: 18,
  },
  recentAdd: {
    fontSize: 22,
    paddingLeft: 10,
  },
  seeAll: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  rA: {
    width: 90,
    height: 90,
    paddingBottom: 1,
  },
  rat: {
    fontSize: 16,
  },
  rast: {
    fontSize: 14,
    color: 'dimgrey',
  },
  copy: {
    color: 'blue',
    fontSize: 8,
    backgroundColor: 'whitesmoke',
    fontWeight: 'bold'
  },
  views: {
    color: 'blue',
    backgroundColor: 'whitesmoke',
    fontWeight: 'bold',
    flex: 1,
    flexDirection: 'column',
    margin: 30,
    marginTop: 560,
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    fontSize: 16,
  },
  profile: {
    width: 70,
    height: 60,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
    color: '#8E8B93',
  },
  transfer: {
    color: '#4F66EE',
    fontSize: 18,
    backgroundColor: 'whitesmoke',
  },
  more: {
    color: '#4467DA',
    fontSize: 12,
  },
  Blue: {
    color: '#4467DA'
  },
  BlockInfo: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  Hash: {
    fontSize: 12,
    fontFamily: 'Apple SD Gothic Neo',
    color: 'grey'
  },
  TopText: {
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: '#E9E4F1',
  },
  BottemText: {
    fontSize: 12,
    backgroundColor: '#E9E4F1',
    shadowColor: 'black',

  },
  greyText: {
    backgroundColor: '#E9E4F1',

  },
  date: {
    color: '#8C8794',
    fontFamily: 'Apple SD Gothic Neo',
    fontSize: 15
  },

  hash: {
    fontSize: 10,
    color: 'gray'
  },
  copy: {
    color: 'blue',
    fontSize: 8,
    backgroundColor: 'whitesmoke',
    fontWeight: 'bold'
  },
})

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(ProdPage)