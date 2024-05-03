import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

export default function Maps() {
    return (
        <YMaps>
            <Map
                defaultState={{ center: [56.802422, 60.610863], zoom: 18 }}
                width="100%"
            >
                <Placemark
                    geometry={[56.802422, 60.610863]}
                    options={{
                        preset: 'islands#redDotIconWithCaption'
                    }}
                />
            </Map>
        </YMaps>
    );
}
