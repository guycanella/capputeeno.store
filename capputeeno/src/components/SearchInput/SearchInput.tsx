import styled from 'styled-components'
import Icon from '../Icon'
import { HTMLAttributes } from 'react'

interface SearchInputProps extends HTMLAttributes<HTMLInputElement> {}

const InputWrapper = styled.div`
	position: relative;
	width: 22rem;
	display: flex;
	align-items: center;
	background-color: #f3f5f6;
	border-radius: 8px;
	padding: 0.625rem 1rem;
	margin-right: 1.5rem;

	&:focus-within {
		outline: 1px solid var(--orange-detail);
	}

	input {
		width: calc(100% - 2rem);
		font-family: inherit;
		font-size: 0.875rem;
		color: #737380;
		background-color: transparent;
		border: none;
		outline: none;
	}

	label {
		cursor: pointer;

		&:hover {
			svg {
				stroke: var(--orange-detail);
			}
		}

		svg {
			position: absolute;
			right: 1rem;
			top: 50%;
			transform: translateY(-50%);
		}
	}
`

const SearchInput = ({ placeholder, ...otherProps }: SearchInputProps) => {
	return (
		<InputWrapper>
			<input id='searchInput' placeholder={placeholder} {...otherProps} />
			<label htmlFor='searchInput'>
				<Icon name='MagnifyingGlass' width={24} height={24} stroke='#737380' />
			</label>
		</InputWrapper>
	)
}

export default SearchInput
