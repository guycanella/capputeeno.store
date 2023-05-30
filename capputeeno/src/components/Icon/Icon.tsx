import type { SVGProps } from 'react'

interface IconProps extends SVGProps<SVGSVGElement> {
	name: string
}

const Icon = ({ name, className, ...otherProps }: IconProps) => {
	return (
		<svg className={className} {...otherProps}>
			<use href={`icon.svg#${name}`} />
		</svg>
	)
}

export default Icon
