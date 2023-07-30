import React from 'react';
import Reader from './reader';
import { useIsFocused } from '@react-navigation/native';
export default function Pdfread() {
    const isFocused = useIsFocused();
return( isFocused &&<Reader  ur='http://www.africau.edu/images/default/sample.pdf'>
</Reader>)
}

  