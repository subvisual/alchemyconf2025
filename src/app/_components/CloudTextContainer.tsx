import { ReactNode, SVGProps } from "react";
interface CloudTextContainerProps extends SVGProps<SVGSVGElement> {
  children?: ReactNode;
}

export default function CloudTextContainer(props: CloudTextContainerProps) {
  const { children, ...svgProps } = props;

  return (
    <div className="relative h-auto w-full sm:w-[750px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="h-auto w-full sm:w-[750px]"
        viewBox="0 0 750 624"
        {...svgProps}
      >
        <path
          stroke="#D7D9B1"
          strokeWidth={16}
          d="M8.775 368.851c-1.707-14.647-1.707-47.694 11.95-62.711 17.072-18.77 16.218-21.33 31.583-31.142 15.364-9.812 37.13-18.344 43.105-29.862 2.027-3.907 5.175-9.333 8.128-14.288 4.99-8.372 8.643-17.485 10.556-27.042a81.008 81.008 0 0 0-1.766-38.913l-4.541-15.317-6.205-17.369a39.96 39.96 0 0 1-2.33-13.446v-4.635a30.043 30.043 0 0 1 35.107-29.612L146.5 86.59a56.677 56.677 0 0 1 17.22 5.912l3.451 1.85a80.736 80.736 0 0 0 38.142 9.577h1.388a83.077 83.077 0 0 0 64.959-31.283l11.114-13.937 2.884-3.686c15.371-19.646 33.422-37.707 57.294-44.947 12.882-3.907 23.125-1.347 30.302 0 2.033.382 6.76 1.667 12.674 3.399 24.998 7.322 48.711 18.287 71.51 30.885l18.245 10.083 32.436 24.316c11.524 6.968 38.582 20.306 54.629 17.918 16.048-2.39 45.951-6.684 58.897-8.532l20.295-2.785a85.177 85.177 0 0 1 44.832 5.97l1.434.607a79.271 79.271 0 0 1 31.937 24.718 79.257 79.257 0 0 1 14.82 32.588l2.676 13.266a137.653 137.653 0 0 1 1.748 43.524l-.586 4.907a120.03 120.03 0 0 1-10.908 37.578l-1.225 2.56a110.157 110.157 0 0 1-40.499 45.562c-13.821 8.738-22.689 22.002-16.995 37.33 1.753 4.718 3.647 8.827 5.045 10.923 4.097 6.143 24.96 12.012 29.797 17.131l16.386 20.251a86.345 86.345 0 0 1 18.53 65.24l-.531 4.17a101.322 101.322 0 0 1-8.353 29.297l-2.503 5.477c-4.574 10.009-9.037 20.822-17.902 27.341-3.732 2.744-8.573 4.873-15.443 5.641-4.711.526-13.62-2.135-22.229-4.942-11.274-3.677-23.023-5.297-34.882-5.297h-8.632a68.816 68.816 0 0 0-54.563 26.88l-11.146 14.501c-13.338 19.289-28.555 41.087-51.966 42.468a44.962 44.962 0 0 1-12.906-1.088c-6.21-1.448-11.74-2.698-16.543-3.756-13.901-3.063-27.468-7.611-40.171-14.033a146.271 146.271 0 0 1-32.823-22.693l-10.758-9.857-20.408-16.637c-8.82-5.404-23.9-12.439-40.545-5.546-7.791 3.226-21.133 16.637-27.82 22.183L281.921 568.5l-12.664 13.136a111.982 111.982 0 0 1-22.194 17.813l-8.036 4.915a56.977 56.977 0 0 1-50.105 4.607l-6.76-2.588a81.444 81.444 0 0 1-30.463-20.534l-3.238-3.475a101.965 101.965 0 0 1-20.005-31.469l-4.283-10.65a80.494 80.494 0 0 0-34.624-39.79l-4.868-2.794a122.663 122.663 0 0 1-16.828-11.62l-9.358-7.688A119.423 119.423 0 0 1 34.72 452a119.44 119.44 0 0 1-13.4-27.238l-1.827-5.336a163.454 163.454 0 0 1-6.53-25.749l-4.187-24.826Z"
        />
      </svg>
      <div className="absolute inset-0 ml-3 flex flex-col items-center justify-center font-zilla_slab text-[14px] font-normal text-dark_blue sm:mb-[68px] sm:ml-5 sm:text-[28px]">
        {children}
      </div>
    </div>
  );
}