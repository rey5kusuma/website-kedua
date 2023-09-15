import MainLayout from '@/components/layouts/mainLayout';
import Link from 'next/link';

export default function Contact() {
  return (
    <MainLayout title="Welcome Homepage">
      <div className="grid min-h-[80vh] place-items-center">
        <div className="flex flex-row bg-no-repeat">
          <img
            src="https://web.bookandlink.com/wp-content/uploads/2020/05/main-contact-02-1500x586.jpg"
            className=""
            alt="image"
            style={{ height: '530px' }}
          />
        </div>
      </div>
      <div className="grid min-h-[70vh] bg-sky-600">
        <div className="flex flex-row">
          <div className="border w-80 ml-20 my-10 flex flex-row">
            <div className="border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-map"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
                />
              </svg>
            </div>
          </div>
          <div className="border w-80 ml-20 my-10 flex flex-row">
            <div className="border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-send-fill"
                viewBox="0 0 16 16"
              >
                <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
              </svg>
            </div>
          </div>
          <div className="border w-80 ml-20 my-10 flex flex-row">
            <div className="border">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-phone-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
