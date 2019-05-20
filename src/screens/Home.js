import React, { Component } from 'react'
import {
    StyleSheet,
    Animated,
    Dimensions,
    View,
    Button
} from 'react-native'
import { Card, CardItem, Body, Text, Icon } from 'native-base';

import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps';

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    state = {
        latitude: -5.0956638,
        longitude: -42.8146287,

        markers: [
            {
                title: "Best Place",
                description: "This is the best place in Portland",
            },
            {
                title: "Little Beach",
                description: "This is the best place in Portland",
            },
            {
                title: "Paradise City",
                description: "This is the best place in Portland",
            }
        ]
    }

    componentWillMount() {
        this.index = 0;
        this.animation = new Animated.Value(0);
    }

    render() {
        const { latitude, longitude } = this.state
        return (
            <View style={styles.container}>
                <MapView
                    initialRegion={{
                        latitude,
                        longitude,
                        latitudeDelta: 0,
                        longitudeDelta: 0
                    }}
                    style={styles.mapView}
                    rotateEnabled={false}
                    showsPointsOfInterest={false}
                    showsBuildings={false}>

                    <Marker
                        coordinate={{ latitude, longitude }}
                    />
                </MapView>

                <Animated.ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH}
                    style={styles.scrollView}
                    contentContainerStyle={styles.endPadding}>
                    {this.state.markers.map((marker, index) => (
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>{marker.title}</Text>
                                    <Text numberOfLines={1} style={styles.cardDescription}>
                                        {marker.description}
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                    ))}
                </Animated.ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapView: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    },
    scrollView: {
        position: "absolute",
        bottom: 30,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    endPadding: {
        paddingRight: width - CARD_WIDTH,
    }
})

export default Home