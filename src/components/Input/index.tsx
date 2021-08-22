import 
  React, 
  {
    InputHTMLAttributes,
    useEffect,
    useRef
  } from 'react';

  import { IconProps } from 'react-feather'
  
  import { useField } from '@unform/core';
  
  import { Container, InputContainer } from './styles';
  
  interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconProps>;
    label: string;
  }
  
  const Input: React.FC<InputProps> = ({
    icon: Icon,
    name,
    label,
    disabled,
    ...rest
  }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, error, registerField } = useField(name);
  
    useEffect(() => {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
      });
    }, [fieldName, registerField]);
  
    return (
        <Container>
            <h1>{label}</h1>

            <InputContainer
              isErrored={!!error}
              isDisabled={disabled}
            >
              {Icon && <Icon size={18} />}

              <input
                defaultValue={defaultValue}
                ref={inputRef}
                style={ name === 'código' ? { textTransform: 'uppercase' } : {}}
                disabled={disabled}
                {...rest}
              />
            </InputContainer>
        </Container>
    );
  };
  
  export default Input;