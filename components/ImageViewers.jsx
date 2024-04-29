import { StyleSheet, View, Image } from 'react-native'

function ImageViewers({ photoHolder }) {
    return (
        <View style={styles.imageContainer}>
            <Image
                source={photoHolder}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        paddingTop: 58
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18
    }
})

export default ImageViewers
