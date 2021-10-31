import { DetailsInfo } from './DetailsInfo'
import { CardTitle } from './CardTitle'

export function ResourceDetails({ details }) {
    return (
        <section className="resource-details flex column card" >
            <CardTitle title={'General Details'} />

            <div className="card-info flex column">
                {Object.keys(details).map((key, idx) =>
                    <DetailsInfo key={idx} label={key} info={details[key]} />
                )}
            </div>

        </section>
    )
}
