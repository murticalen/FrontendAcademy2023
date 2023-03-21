export enum OperatingSystem {
    MacOS = 'mac',
    Windows = 'windows',
    Linux = 'linux'
}

enum KeyboardType {
    Membrane, // first item in enum is 0 by default if no value is provided
    Touch,
    Mechanical = 90,
    Butterfly, // this is 91
    Optical = 'opti',
    Other = 'other', // now we get an error (instead of 92) without provided value because Optical value wasn't a number
}

type SuperCoolColor = 'midnight black' | 'flashing red' | 'pulpe orange' | 'argentina silver' // all possible values

interface Device {
    os: OperatingSystem
    color: SuperCoolColor
    keyboardType?: KeyboardType // question mark means the value is optional, it is of type KeyboardType | undefined
    name: string|number // name can be either string and number
    type: 'mobile' | 'laptop' | 'desktop' // distinct values don't have to be exported to a type
}

type NetworkConnectivity = '2G' | '3G' | '4G' | '5G'

interface Smartphone extends Device {
    networkConnectivity: NetworkConnectivity[] // array of available connectivities
    type: 'mobile' // all smartphones have type === 'mobile'
}

interface InnerProps {
    device: Smartphone // if it were Device, polymorphism with Smartphone type would be valid
}

// there's really not much practical difference between interface and type other than type needs = before {
type HTMLAttributes = {
    id: string|undefined
    className?: string
    placeholder?: string
    style: {
        color: 'red' | 'blue'
        backgroundColor: 'pink' | 'magenta' | 'purple'
    }
}

type HTMLStuff = Pick<HTMLAttributes, 'className' | 'style'> // pick only className and style from HTML Attrs.
type HTMLStuffSame = Omit<HTMLAttributes, 'id' | 'placeholder'>

type EmptyProps = Omit<InnerProps, 'device'> // omit device from InnerProps, now they are empty

type NewInnerProps = InnerProps & {isBroken?: boolean} // NewInnerProps is union of empty props and {isBroken}

const v: Smartphone = {
    os: OperatingSystem.Windows,
    color: 'midnight black',
    name: 'Nokia Lumia',
    type: 'mobile',
    networkConnectivity: [],
}
const ip: NewInnerProps = {
    device: v,
    isBroken: false,
}