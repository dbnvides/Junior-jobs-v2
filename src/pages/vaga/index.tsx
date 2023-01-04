import { Container } from "../../components/Container"
import { StyledMain } from "./style"

export const Vaga = () =>{
    return (
        <>
        <Container>
            <StyledMain>
                <div className="card">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <h3>Scoot</h3>
                    <p>scoot.com</p>
                    <button> Site da empresa </button>
                </div>
                <div className="description">
                    <p>1h atrás - meio período</p>
                    <h3>Engenheiro  de Software</h3>
                    <h5>Rio de janeiro</h5>
                    <button> Candidatar </button>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                    </p>
                    <h3>Requerimentos</h3>
                    <p>
                        Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
                    </p>
                    <h3>O que você irá fazer</h3>
                    <p>
                        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                    </p>
                </div>
            </StyledMain>
        </Container>
        <footer>
            <div>
                <div>
                    <h3>Engenheiro de Software</h3>
                    <p>So Digital Inc.</p>
                </div>
                <button>Candidatar</button>
            </div>
        </footer>
        </>
    )
}